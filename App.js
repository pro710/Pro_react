

const heading = React.createElement(
    "h1",
{
    id:"title",
},
"heading 1 "
);
{/* <h1 id="title">heading</h1> */}

const heading2 = React.createElement(
    "h1",
{
    id:"title",
},
"heading 2 "
);
const heading3 = React.createElement(
    "h1",
{
    id:"title",
},
"heading 3 "
);

const container= React.createElement(
    "h1",
{
    id:"container",
},
[heading,heading2,heading3]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(container);


