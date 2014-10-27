document.documentElement.style.webkitTouchCallout = "none";
document.documentElement.style.webkitUserSelect = "none";
document.documentElement.style.webkitTapHighlightColor ="rgba(0,0,0,0)";

var _stateObj={};

/*viewappearing
--------------------------------*/
try{window.parent.bind(this,'viewappearing',onviewappearing);}catch(_err){}
function onviewappearing(){}

/*viewdisappearing
--------------------------------*/
try{window.parent.bind(this,'viewdisappearing',onviewdisappearing);}catch(_err){}
function onviewdisappearing(){ }

/*viewappeared
--------------------------------*/
try{window.parent.bind(this,'viewappeared',onviewappeared);}catch(_err){}
function onviewappeared(){ }
	
/*viewdisappeared
--------------------------------*/
try{window.parent.bind(this,'viewdisappeared',onviewdisappeared);}catch(_err){}
function onviewdisappeared(){}
	
/*play
--------------------------------*/
try{window.parent.bind(this,'play',onplay);}catch(_err){}
function onplay(){}
	
/*preview
--------------------------------*/
try{window.parent.bind(this,'preview',onpreview);}catch(_err){}
function onpreview(){}

/*pause
--------------------------------*/
try{window.parent.bind(this,'pause',onpause);}catch(_err){}
function onpause(){}

/*memoryWarning
--------------------------------*/
try{window.parent.bind(this,'memoryWarning',onmemorywarning);}catch(_err){}
function onmemorywarning(){}



var app={
	container:undefined,
	currentEvent:"click",
		
	 ua : navigator.userAgent,
     isiPad : function(){return (/iPad/i.test(this.ua) || /iPhone OS 3_1_2/i.test(this.ua) || /iPhone OS 3_2_2/i.test(this.ua))},
	
	init:function(){
		if(this.isiPad()) {this.currentEvent="touchend"};
		this.container=document.getElementById("container");
		},
		
	
	addClassName: function(element, className) 
	{
		if (!this.hasClassName(element, className))
			element.className += (element.className ? ' ' : '') + className;
		return element;
	},	
	
	hasClassName: function(element, className) 
	{
		var elementClassName = element.className;
		return (elementClassName.length > 0 && (elementClassName == className ||
		new RegExp("(^|\\s)" + className + "(\\s|$)").test(elementClassName)));
  	},
	
	removeClassName: function(element, className) 
	{
		element.className = this.strip(element.className.replace(new RegExp("(^|\\s+)" + className + "(\\s+|$)"), ' '));
		return element;
	},
	
	strip:function(s)
	{
    	return s.replace(/^\s+/, '').replace(/\s+$/, '');
    },
	
		
	goToSequence:function(_sequence){ window.parent.navigateToSequence(_sequence); },
	
	openPdf:function(_path,_email){
	if(window.parent.PDFHelper.OpenPDF){
	window.parent.PDFHelper.OpenPDF(_path, window, _email);
	}else
	{window.open(_path)}
	},
	
	enableSwipeLeft:function(){ document.getElementsByName("body")[0].dataset.preventLeftSwipe="false"; },
	
	disableSwipeLeft: function(){ document.getElementsByName("body")[0].dataset.preventLeftSwipe="true"; },
	
	enableSwipeRight:function(){ document.getElementsByName("body")[0].dataset.preventRightSwipe="false"; },
	
	disableSwipeRight: function(){ document.getElementsByName("body")[0].dataset.preventRightSwipe="true"; },
	
	goNextSequence: function(){ window.parent.goNextSequence() },
		 
 	goPreviousSequence: function(){ window.parent.goPreviousSequence() },
	
	sendEmail: function(){ window.parent.sendEmail() }
		
	}
	
	
app.init();
	
	