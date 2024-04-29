import React, { useEffect, useRef, useState } from "react";

const RichTextEditor = () => {
  const [editorContent, setEditorContent] = useState<string>(
    `<h1>Type anything you want!</h1><p>Here is a paragraph.</p>`
  );

  const editorRef = useRef<HTMLDivElement>(null);
  const savedSelection = useRef<Range | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = editorContent;
      if (savedSelection.current) {
        restoreSelection(savedSelection.current);
      }
    }
  }, [editorContent]);

  const execCmd = (cmd: string, value?: string) => {
    document.execCommand(cmd, false, value);
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  const handleInputChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    execCmd(evt.target.dataset.cmd!, evt.target.value);
    setEditorContent(editorRef.current?.innerHTML || "");
  };

  const handleButtonClick = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const button = evt.currentTarget;
    if (button.classList.contains("prompt")) {
      const value = prompt("Enter the link here:", "http://");
      if (value !== null) {
        execCmd(button.dataset.cmd!, value);
        setEditorContent(editorRef.current?.innerHTML || "");
      }
    } else {
      execCmd(button.dataset.cmd!);
      setEditorContent(editorRef.current?.innerHTML || "");
    }
  };

  const saveSelection = () => {
    if (window.getSelection) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        return selection.getRangeAt(0);
      }
    }
    return null;
  };

  const restoreSelection = (range: Range | null) => {
    if (range) {
      if (window.getSelection) {
        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
    }
  };

  const handleInput = () => {
    savedSelection.current = saveSelection();
    setEditorContent(editorRef.current?.innerHTML || "");
  };

  return (
    <div id="wysiwyg">
      <div className="btns">
        <div className="category">
          <button data-cmd="undo">
            <i className="fas fa-undo"></i>
          </button>
          <button data-cmd="redo">
            <i className="fas fa-redo"></i>
          </button>
        </div>
        <div className="category">
          <select data-cmd="formatBlock" onChange={handleInputChange}>
            <option value="p">Paragraph</option>
            <option value="h1">Title 1</option>
            <option value="h2">Title 2</option>
            <option value="h3">Title 3</option>
          </select>
          <select data-cmd="fontSize" onChange={handleInputChange}>
            {[1, 2, 3, 4, 5, 6, 7].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <select data-cmd="fontName" onChange={handleInputChange}>
            <option value="Arial">Arial</option>
            <option value="Roboto">Roboto</option>
            <option value="serif">Serif</option>
            <option value="sans-serif">Sans-serif</option>
          </select>
        </div>
        <div className="category">
          <button data-cmd="bold" onClick={handleButtonClick}>
            <i className="fas fa-bold"></i>
          </button>
          <button data-cmd="italic" onClick={handleButtonClick}>
            <i className="fas fa-italic"></i>
          </button>
          <button data-cmd="underline" onClick={handleButtonClick}>
            <i className="fas fa-underline"></i>
          </button>
        </div>
        <div className="category">
          <input
            data-cmd="forecolor"
            type="color"
            onChange={handleInputChange}
            value="#000000"
          />
          <input
            data-cmd="backcolor"
            type="color"
            onChange={handleInputChange}
            value="#FFFFFF"
          />
        </div>
        <div className="category">
          <button data-cmd="justifyLeft" onClick={handleButtonClick}>
            <i className="fas fa-align-left"></i>
          </button>
          <button data-cmd="justifyCenter" onClick={handleButtonClick}>
            <i className="fas fa-align-center"></i>
          </button>
          <button data-cmd="justifyRight" onClick={handleButtonClick}>
            <i className="fas fa-align-right"></i>
          </button>
          <button data-cmd="justifyFull" onClick={handleButtonClick}>
            <i className="fas fa-align-justify"></i>
          </button>
        </div>
        <div className="category">
          <button data-cmd="indent" onClick={handleButtonClick}>
            <i className="fas fa-indent"></i>
          </button>
          <button data-cmd="outdent" onClick={handleButtonClick}>
            <i className="fas fa-outdent"></i>
          </button>
        </div>
        <div className="category">
          <button data-cmd="insertUnorderedList" onClick={handleButtonClick}>
            <i className="fas fa-list-ul"></i>
          </button>
          <button data-cmd="insertOrderedList" onClick={handleButtonClick}>
            <i className="fas fa-list-ol"></i>
          </button>
        </div>
        <div className="category">
          <button
            data-cmd="createlink"
            className="prompt"
            onClick={handleButtonClick}
          >
            <i className="fas fa-link"></i>
          </button>
          <button
            data-cmd="insertimage"
            className="prompt"
            onClick={handleButtonClick}
          >
            <i className="fas fa-image"></i>
          </button>
        </div>
      </div>
      <div
        id="editor"
        contentEditable
        ref={editorRef}
        onBlur={handleInput}
        onChange={handleInput}
      />
    </div>
  );
};

export default RichTextEditor;
