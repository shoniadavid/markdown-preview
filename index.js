const placeHolder = `# Markdown Previewer!

## This is a UwU text...
### And here's some other cool stuff:

Heres some \`pies\`
~~There isn't uwu~~.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`


> "Be the **uwu** to my **_owo_**"
-_idk some tumblr girl maybe_

Enough cringe, its just my markdown previewer made for FCC challange.

There are many other things you can do with this markdown previewer.

for example:
- There are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

You can visit [portfolio webpage]("shoniadavid.me")
_(perhaps it's shut down... idk)_


And again, dont forget to UwU

![UwU](https://avaazdo.s3.amazonaws.com/original_5ccdb9b8604f2.jpg)
`;


marked.setOptions({breaks: true});

const renderer = new marked.Renderer();

function App(){
    const [text, setText] = React.useState(placeHolder);
    return(
        <div>
         <h2 className = "text-center m-4">Convert Your Markdown</h2>
         <div className = "row">
           <div className = "col-lg-6 col-md-6 col-sm-12 col-xs-12">
             <h6 className = "text-center" >Editor:</h6>
             <textarea className =  " textarea form-control p-2" name="text" id = "text"  value = {text} onChange = {(e) => setText(e.target.value)} />
           </div>
           <div className = "col-lg-6 col-md-6 col-sm-12 col-xs-12">
             <h6 className = "text-center" >Previewer:</h6>
             <Preview markdown = {text}/>
           </div>
         </div>
       </div>
    );

}

function Preview({markdown}){
      return(
        <div className = "preview rounded p-2" dangerouslySetInnerHTML = {{__html: marked(markdown, {renderer: renderer}),}} id = "preview"/>
      );
}


ReactDOM.render(<App />, document.getElementById("app"));