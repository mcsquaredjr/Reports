DATE_MATCHER = \
r'^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$'


MODAL_PNL = \
'''
<!-- Button trigger modal -->
  <a data-toggle="modal" href="#myModal" class="btn btn-default btn-lg">Markdown help</a>

  <!-- Modal -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">Markdown help</h4>
        </div>
        <div class="modal-body">
        <h4>Section headers and subheaders</h4>
        <p>
        To create a header, use three pounds <code>###</code>, in a row, to create sub-header use four pounds <code>####</code>
        </p>
        <pre>
        <code>
        ### I am a header
        #### I am a sub-header
        </code>
        </pre>
        <p>
        It will be rendered as:
        </p>
        <hr>
        <h3>I am a header</h3>
        <h4>I am a subheader</h4>
        <hr>
        <h4>Bullets</h4>
        <p>Use asterisk <code>*</code>to create a bulleted list:</p>
        <pre>
        * this is item one
        * this item two
        * this item three
        </pre>
        <p>
        It will be rendered as:
        </p>
        <hr>
        <ul>
        <li>this is item one</li>
        <li>this is item two</li>
        <li>this is item three</li>
        </ul>
        <hr>
        <h4>Numbered list</h4>
        <p>
           Use numbers (even not sequential to create a numbered list:)
        </p>
        <pre>
        1. this is item one
        1. this is item two
        1. this is item three
        </pre>
        <p>
        It will be rendered as:
        <p/>
        <hr>
        <ol>
        <li>this is item one</li>
        <li>this is item two</li>
        <li>this is item three</li>
        </ol>
        <hr>
        <h4>Links</h4>
        <p>To insert a link, use this:</p>
        <pre>
If you want to learn more about markdown, visit [this link](http://daringfireball.net/projects/markdown/syntax)
        </pre>
<p>It will be rendered as:</p>
<hr>
<p>If you want to learn more about markdown, visit  <a href="http://daringfireball.net/projects/markdown/syntax">this link</a></p>
<hr>
<p>This really all you need to know to start using markdown!</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
'''
