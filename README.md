scroll-spy
==========

Scroll spy is small plain unobtrusive javascript that spies on the scrolling of a document window.

If you want to set the active link in your web page based on position of a name anchor as the page scrolls, this is the script for it.

Setup
======

If you know what a scroll-spy is already, all you want must be a script that achieves it without getting in your way.

Download the scroll-spy.js script.

Import the script into your html file using the <script> tag;
<script src="scroll-spy.js"></script>

Add attribute, data-scroll-spy to every named anchor you need to spy on, and you are done.

Note: Put <script> tags after your footer.


If you are new to scroll-spy, follow the rest of these instructions;

Setup your navigation link tags to point to your named anchors;

<ul>
  <li><a href='#table-of-content'> Table of Content </a></li>
  <li><a href='#foot-note'> Foot Notes </a></li>
</ul>

Add 'data-scroll-spy' attribute to your named anchor elements;

<div id='table-of-content' data-scroll-spy>
  ....
  
</div>
<div id='foot-note' data-scroll-spy>
...
</div>


Create a special style for .active class in your stylesheet;

a.active{
  background-color:#ccc;
  color:#333;
}


You're all done.
