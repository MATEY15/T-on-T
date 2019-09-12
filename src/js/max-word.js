var wordlimit = (function(){
  var clonempty = function( elm ){
    var doppel = elm.cloneNode();
    doppel.innerHTML = '';
    return doppel;
  };
  var wordsmith = function( elm, out, opts ){
    var i, l, kids = elm.childNodes, kid, txt, wrd, tnd;
    for (i=0, l=kids.length; i<l && opts && opts.limit; i++) {
      if ( (kid = kids[i]) && kid.nodeType === 1 ) {
        wordsmith( kid, out.appendChild( clonempty(kid) ), opts );
      }
      else if ( kid && kid.nodeType === 3 ) {
        txt = kid.nodeValue;
        wrd = txt.replace(/^\s+|\s+$/g, '').split(' ');
        if ( wrd.length >= opts.limit ) {
          tnd = document.createTextNode( wrd.slice(0, opts.limit).join(' ') );
          out.appendChild( tnd );
          opts.limit -= wrd.length;
          if ( opts.limit < 0 && opts.ellipsis ) {
            out.appendChild( document.createTextNode('...') );
          }
          opts.limit = 0;
        }
        else {
          opts.limit -= wrd.length;
          out.appendChild( document.createTextNode(txt) );
        }
      }
    }
    return out;
  }
  return function(classname, limit, ellipsis){
    var i, l, elms = document.getElementsByClassName(classname), elm, out;
    for (i=0, l=elms.length; i<l; i++) {
      elm = elms[i];
      out = wordsmith( elm, clonempty(elm), {
        limit: limit, 
        ellipsis: ellipsis
      });
      elm.parentNode.insertBefore( out, elm );
      elm.parentNode.removeChild( elm );
    }
  };
})();