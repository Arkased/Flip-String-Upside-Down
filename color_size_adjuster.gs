// Modifies the color and font size of a Google Document (can be adjusted for other types).
// Other types of style mutations are possible, but I find font size and font color are the
// two most visually impressive.

// You will need to give permission to this script for it to run and edit access to the
// document you wish to mess up.
function modify() {
  // The id of the document you wish to modify. From the url of an open Google Doc, it is the second
  // to last section: .../*id*/edit
  var id = '1lncDzbFkwAld2M7V5TlKb-HVQBO7I19MpnSHM3XnUJQ';
  
  var text = DocumentApp.openById(id).getBody().editAsText();
  
  // Edits each character individually
  for (var i = 0; i < text.getText().length; i++){
    var style = {};
    
    // modifies font size to fluctuate based on the sine function
    var fontSize = Math.sin(i / 10 * Math.PI) * 4 + 11;
    style[DocumentApp.Attribute.FONT_SIZE] = fontSize;
    
    // modifies the color map across a certain hue under hsl (I don't understand how this works)
    var color = hslToRgb((i * .017) % 1, 1, .4);
    color = rgbToHex(color[0], color[1], color[2]);
    style[DocumentApp.Attribute.FOREGROUND_COLOR] = color;
    
    text.setAttributes(i, i, style);
  }
}

// Code below is taken from StackOverflow
function hslToRgb(h, s, l){
        var r, g, b;

        if(s == 0){
            r = g = b = l; // achromatic
        }else{
            var hue2rgb = function hue2rgb(p, q, t){
                if(t < 0) t += 1;
                if(t > 1) t -= 1;
                if(t < 1/6) return p + (q - p) * 6 * t;
                if(t < 1/2) return q;
                if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            }

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}