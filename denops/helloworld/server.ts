export function create_index_html(text: String) {
  let HTML = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>New</title>
    </head>
    <body>
        <link rel="stylesheet" href="/css/style.css" type="text/css" media="screen" title="no title" charset="utf-8">
        <script src="/js/websocket.js" charset="utf-8"></script>
        <div id="eventType"></div>
        <div id="dispMsg"></div>
        <div id="preview">
            ${text}
        </div>
    </body>
</html>
`;
  return HTML;
}
