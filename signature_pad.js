var wrapper6 = document.getElementById("signature-pad6"),
   clearButton6 = wrapper6.querySelector("[data-action=clear]"),
   canvas6 = wrapper6.querySelector("canvas"),
   signaturePad6;

function resizeCanvas6() {
    var oldContent = signaturePad6.toData();
    var ratio =  Math.max(window.devicePixelRatio || 1, 1);
    canvas6.width = canvas6.offsetWidth * ratio;
    canvas6.height = canvas6.offsetHeight * ratio;
    canvas6.getContext("2d").scale(ratio, ratio);
    signaturePad6.clear();
    signaturePad6.fromData(oldContent);
}

var signaturePad6 = new SignaturePad(canvas6);
signaturePad6.minWidth = 1;
signaturePad6.maxWidth = 5;
signaturePad6.penColor = "#000000";
signaturePad6.backgroundColor = "#FFFFFF";

    clearButton6.addEventListener("click", function (event) {
        signaturePad6.clear();
    });

function resizeCanvas()
{
	resizeCanvas6();
}

window.onresize = resizeCanvas;
resizeCanvas();

function resetForm()
{
	signaturePad6.clear();
	document.forms["DAFORM"].reset();
}

