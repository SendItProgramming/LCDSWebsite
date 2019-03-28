import React, { Component } from 'react';
import { 
    Editor, 
    EditorState, 
    RichUtils, 
    convertToRaw,
    CompositeDecorator
} from 'draft-js';
import {
	Panel,
	ListGroup,
	ListGroupItem,
	FormGroup,
	ControlLabel,
	FormControl,
	Checkbox,
	Button,
    Image,
    Dropdown,
    DropdownButton,
    MenuItem
} from "react-bootstrap";
import "../index-src/css/HTMLEditor.css";


export default class TextEditor extends Component {
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty(createCompositeDecorator()),
            styles: getStyles(),
            content: {
                target:"blank",
                last_updated: "now",
            },
            inputVisible: false,
            urlString: "",
            inc: 0
        };
        this.onChange = (editorState) => this.setState({editorState});
        this.SaveToDB = this.SubmitContent.bind(this);
        this.newLinkage = this.GrabSelectedForLink.bind(this);
        this.changeUrl = (event) => this.setState({urlString: event.target.value});
        this.removeLink = (event) => this.UnsetLink(event);
    }

    GrabSelectedForLink(event) {
        let link = "";
        event.preventDefault();
        const {editorState} = this.state;
        const selected_text = editorState.getSelection();
        if(selected_text.isCollapsed()) {
            // selection is just the carat, 
            // nothing is highlighted.
            return;
        }
        const text_contents = editorState.getCurrentContent();
        const selected_textKey = selected_text.getStartKey();
        const charOffsetFromBlockStart = selected_text.getStartOffset();
        const text_block = text_contents.getBlockForKey(selected_textKey);
        const selected_text_entityinfo = text_block.getEntityAt(charOffsetFromBlockStart);

        if(selected_text_entityinfo) {
            const href = text_contents.getEntity(selected_text_entityinfo);
            link = href.getData().url;
        }

        this.setState({
            inputVisible: true,
            urlString: link
        });

    }

    SetLink(event) {
        event.preventDefault();
        const {editorState} = this.state;
        const {urlString} = this.state;
        const text_content = editorState.getCurrentContent();
        const link_content = text_content.createEntity(
            'LINK',
            'MUTABLE',
            {url: urlString}
        );
        const contentKey = link_content.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, 
            {
                currentContent: link_content
            }
        );
        this.setState({
            editorState: RichUtils.toggleLink(
                newEditorState,
                newEditorState.getSelection(),
                contentKey
            ),
            inputVisible: false,
            urlString: ""
        });
    }

    UnsetLink(event) {
        event.preventDefault();
        const {editorState} = this.state;
        const text_block = editorState.getSelection();
        if(! text_block.isCollapsed()) {
            this.setState({
                editorState: RichUtils.toggleLink(editorState, text_block, null),
            });
        }
        console.log("now here");
    }

    linkInput() {
        let inputBox;
        if(!this.state.inputVisible) {
            return inputBox;
        }
        return(
            <div>
                <input
                    onChange={this.changeUrl}
                    ref="url"
                    value={this.state.urlString}
                />
                <Button onClick={(event) => this.SetLink(event)}>
                    Set Link
                </Button>
            </div>
        );
    }

    SubmitContent(event) {
        event.preventDefault();
/*
        const url = "http://localhost:8888/textediting/save";
        fetch(url, {
            method: "POST",
            body: this.state.content
        }).then(response => response.text()).then(html => console.log(html));
*/
        const data = this.state.editorState.getCurrentContent();
        if(!data.hasText()) {
            alert("Nothing to submit.");
            return;
        }
        this.setState({content: {
                text: data,
                last_updated: "now"
            }
        });
        console.log(this.state.content, this.state.inc++);
        alert("Content Saved");
        this.onChange(EditorState.createEmpty(createCompositeDecorator()));
    }

    ChangeHandler(newState) {
        this.setState({editorState: newState})
    }

    KeyDownHandler(keyStroke) {
        const {editorState} = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, keyStroke);
        if(newState) {
            this.ChangeHandler(newState);
            return true;
        } else {
            return false;
        }
    }

    Tab(event) {
        const maxDepth = 4;
        this.ChangeHandler(
            RichUtils.onTab(
                event, 
                this.state.editorState, 
                maxDepth
            )
        );
    }

    render() {
        const {editorState} = this.state;
        let className = 'TextEditor-editor';
        let currentContent = editorState.getCurrentContent();
        if(!currentContent.hasText()) {
            let styletype = currentContent.getBlockMap().first().getType();
            if(styletype !== 'unstyled') {
                className +=' TextEditor-hidePlaceholder';
            }
        }

        this.state.content.text = JSON.stringify(convertToRaw(currentContent));
        return(
            <div className="TextEditor-root">
                {this.getBlockStyleControls(editorState)}
                {this.getInlineStyleControls(editorState)}
                <div className={className} onClick={
                    () => this.refs.editor.focus()
                }>
                {this.getEditor(editorState)}
                </div>
                <div>
                    <Button onMouseDown={this.SaveToDB}>
                        Save Text
                    </Button>
                    <Button onClick={this.newLinkage}>
                        New link
                    </Button>
                    {this.linkInput()}
                    <Button onMouseDown={this.removeLink}>
                        Remove link
                    </Button>
                </div>
            </div>
        )
    }

    getBlockStyleControls(editorState) {
        return(
            <BlockStyle
                editorState={editorState}
                styles={this.state.styles}
                onToggle={
                    (style) => this.BlockTypeOnToggle(style)
                }
            />
        )
    }

    BlockTypeOnToggle(blockTypeStyleString) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockTypeStyleString
            )
        );
    }

    getInlineStyleControls(editorState) {
        return(
            <InlineStyle
                editorState={editorState}
                styles = {this.state.styles}
                onToggle={
                    (style) => this.InlineTypeOnToggle(style)
                }
            />
        )
    }

    InlineTypeOnToggle(InlineStyleString) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                InlineStyleString
            )
        );
    }

    getEditor(editorState) {
        return(
            <Editor
            blockStyleFn={customblock}
            customStyleMap={this.state.styles.styleMap}
            editorState={editorState}
            handleKeyCommand={
                (keyStroke) => this.KeyDownHandler(keyStroke)
            }
            onChange={this.onChange}
            onTab={(event) => this.Tab(event)}
            placeholder="Edit text here"
            ref="editor"
            spellCheck={true}
        />
        )
    }
}

function getStyles() {
    return {
        inline: [
            {label: 'Bold', style: 'BOLD'},
            {label: 'Italic', style: 'ITALIC'},
            {label: 'Underline', style: 'UNDERLINE'},
            {label: 'Monospace', style: 'CODE'},
        ],
        block: [
            {label: 'H1', style: 'header-one'},
            {label: 'H2', style: 'header-two'},
            {label: 'H3', style: 'header-three'},
            {label: 'H4', style: 'header-four'},
            {label: 'H5', style: 'header-five'},
            {label: 'H6', style: 'header-six'},
            {label: 'Blockquote', style: 'blockquote'},
            {label: 'Bullet Points', style: 'unordered-list-item'},
            {label: 'Numbered List', style: 'ordered-list-item'},
            {label: 'Text Block', style: 'code-block'},
        ],
        colors: [
            {label: 'Red', style: 'red', color: 'rgba(255, 0, 0, 1.0)'},
            {label: 'Orange', style: 'orange', color: 'rgba(255, 127, 0, 1.0)'},
            {label: 'Yellow', style: 'yellow', color: 'rgba(180, 180, 0, 1.0)'},
            {label: 'Green', style: 'green', color: 'rgba(0, 180, 0, 1.0)'},
            {label: 'Blue', style: 'blue', color: 'rgba(0, 0, 255, 1.0)'},
            {label: 'Indigo', style: 'indigo', color: 'rgba(75, 0, 130, 1.0)'},
            {label: 'Violet', style: 'violet', color: 'rgba(127, 0, 255, 1.0)'},
        ],
        styleMap: {
            CODE: {
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
              fontSize: 16,
              padding: 2,
            },
        }
    }
}

function customblock(contentblock) {
    if(contentblock.getType() === 'blockquote') {
        return 'TextEditor-blockquote';
    } else {
        return null;
    }
}


class StyleButton extends React.Component {
    constructor() {
      super();
      this.onToggle = (e) => {
        e.preventDefault();
        this.props.onToggle(this.props.style);
      };
    }

    render() {
      let className = 'TextEditor-styleButton';
      if (this.props.active) {
        className += ' TextEditor-activeButton';
      }

      return (
        <span className={className} onMouseDown={this.onToggle}>
          {this.props.label}
        </span>
      );
    }
}

function InlineStyle(props) {
    let current = props.editorState.getCurrentInlineStyle();
    let inlineStyle = props.styles.inline;
    var styleButtons = [];
    let isActive = false;
    for(var i = 0; i < inlineStyle.length; i++) {
        isActive = false;
        if(current.has(inlineStyle[i].style)) {
            isActive = true;
        }
        styleButtons.push(
            <StyleButton
            key={inlineStyle[i].label}
            active={isActive}
            label={inlineStyle[i].label}
            onToggle={props.onToggle}
            style={inlineStyle[i].style}
        />
        );
    }
    return(
        <div className="TextEditor-controls">
            {styleButtons}
        </div>
    );
}

function BlockStyle(props) {
    let blockStyling = props.styles.block;
    let current = props.editorState.getSelection().getStartKey();
    let blockStyle = props.editorState.getCurrentContent();
    blockStyle = blockStyle.getBlockForKey(current);
    let isActive = false;
    var blockButtons = [];
    for(var i = 0; i < blockStyling.length; i++) {
        isActive = false;
        if(blockStyle === blockStyling[i].style) {
            isActive = true;
        }
        blockButtons.push(
            <StyleButton
            key={blockStyling[i].label}
            active={isActive}
            label={blockStyling[i].label}
            onToggle={props.onToggle}
            style={blockStyling[i].style}
            />
        );
    }
    return(
        <div className="TextEditor-controls">
            {blockButtons}
        </div>
    );
}

function findLink(text_block, callback, text_state) {
    text_block.findEntityRanges(
        (content) => {
            const key = content.getEntity();
            return(
                key !== null && text_state.getEntity(key).getType() === "LINK"
            );
        }, callback
    );
}

function createCompositeDecorator() {
    const anchor = (props) => {
            const {url} = props.contentState.getEntity(props.entityKey).getData();
            return(
                <a href={url} style={
                    {
                        color: 'rgba(0, 0, 255, 1.0)',
                        textDecoration: 'underline'
                    }
                }>
                    {props.children}
                </a>
            );
        }

    // uses strategy pattern, currently only one strategy
    return new CompositeDecorator([
        {strategy: findLink,
        component: anchor}
    ])
}