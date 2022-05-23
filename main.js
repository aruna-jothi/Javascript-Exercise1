var container = document.createElement('div');
container.setAttribute('id','container');
document.body.appendChild(container);
container.style.margin = '0';
container.style.padding = '0';
container.style.width = '100%';
container.style.height = 'auto';
container.style.display = 'flex';

/*Create sidebar*/
let sidebar = document.createElement('div');
sidebar.setAttribute('class','side');
container.appendChild(sidebar);
sidebar.style.width = '20%';
// sidebar.style.display = 'flex';
sidebar.style.height = 'auto';
sidebar.style.backgroundColor = 'black';
// sidebar.style.padding = '20px';
// sidebar.style.margin = '20px';



/*side bar text "Metronic" creation*/
let text1 = document.createElement('div');
text1.setAttribute('class','text');
var value1 = document.createTextNode("METRONIC");
text1.appendChild(value1);
sidebar.appendChild(text1);
text1.style.color = 'white';
text1.style.height = '50px';
text1.style.display = 'flex';
text1.style.justifyContent = 'flex-start';
text1.style.alignItems = 'center';
text1.style.margin = '20px';
text1.style.fontWeight = '900';

/*sidebar blank element*/
let text2 = document.createElement('div');
text2.setAttribute('class','blank');
sidebar.appendChild(text2);
text2.style.backgroundColor = "#0e0c1a";
text2.style.height = '20px';

/*sidebar text "Dashboard"*/
let text3 = document.createElement('div');
text3.setAttribute('class','dashboard');
var value2 = document.createTextNode("Dashboard");
text3.appendChild(value2);
sidebar.appendChild(text3);
text3.style.color = '#cbbdbd';
// document.getElementsByClassName('dashboard')[0].style.height = '50px';
text3.style.display = 'flex';
text3.style.justifyContent = 'center';
text3.style.margin = '20px';

/*sidebar text "Layout Builder"*/
let text4 = document.createElement('div');
text4.setAttribute('class','layout');
var value3 = document.createTextNode("Layout Builder");
text4.appendChild(value3);
sidebar.appendChild(text4);
text4.style.color = '#cbbdbd';
text4.style.display = 'flex';
text4.style.justifyContent = 'center';
text4.style.margin = '20px';

/*sidebar text "Components"*/
let text5 = document.createElement('div');
text5.setAttribute('class','comp');
var value4 = document.createTextNode("COMPONENTS");
text5.appendChild(value4);
sidebar.appendChild(text5);
text5.style.color = 'grey';
text5.style.height = '50px';
text5.style.display = 'flex';
text5.style.justifyContent = 'flex-start';
text5.style.alignItems = 'center';
text5.style.margin = '20px';

/*sidebar text "Material UI"*/
let text6 = document.createElement('div');
text6.setAttribute('class','material');
var value5 = document.createTextNode("Material UI");
text6.appendChild(value5);
sidebar.appendChild(text6);
text6.style.color = '#cbbdbd';
text6.style.display = 'flex';
text6.style.justifyContent = 'center';
text6.style.margin = '20px';

/*sidebar text "Ng3ootstrap"*/
let text7 = document.createElement('div');
text7.setAttribute('class','ng3');
var value6 = document.createTextNode("Ng3ootstrap");
text7.appendChild(value6);
sidebar.appendChild(text7);
text7.style.color = '#cbbdbd';
text7.style.display = 'flex';
text7.style.justifyContent = 'center';
text7.style.margin = '20px';

/*sidebar text "Applications"*/
let text8 = document.createElement('div');
text8.setAttribute('class','app');
var value7 = document.createTextNode("APPLICATIONS");
text8.appendChild(value7);
sidebar.appendChild(text8);
text8.style.color = 'grey';
text8.style.height = '50px';
text8.style.display = 'flex';
text8.style.justifyContent = 'flex-start';
text8.style.alignItems = 'center';
text8.style.margin = '20px';

/*sidebar text "ECOMMERCE"*/
let text9 = document.createElement('div');
text9.setAttribute('class','eCommerce');
var value8 = document.createTextNode("eCommerce");
text9.appendChild(value8);
sidebar.appendChild(text9);
text9.style.color = '#cbbdbd';
text9.style.display = 'flex';
text9.style.justifyContent = 'center';
text9.style.margin = '20px';

/*sidebar text "User Management"*/
let text10 = document.createElement('div');
text10.setAttribute('class','user');
var value9 = document.createTextNode("User Management");
text10.appendChild(value9);
sidebar.appendChild(text10);
text10.style.color = '#cbbdbd';
text10.style.display = 'flex';
text10.style.justifyContent = 'center';
text10.style.margin = '20px';

/*sidebar text "Custom"*/
let text11 = document.createElement('div');
text11.setAttribute('class','custom');
var value10 = document.createTextNode("CUSTOM");
text11.appendChild(value10);
sidebar.appendChild(text11);
text11.style.color = 'grey';
text11.style.height = '50px';
text11.style.display = 'flex';
text11.style.justifyContent = 'flex-start';
text11.style.alignItems = 'center';
text11.style.margin = '20px';

/*sidebar text "Wizards"*/
let text12 = document.createElement('div');
text12.setAttribute('class','wizards');
var value11 = document.createTextNode("Wizards");
text12.appendChild(value11);
sidebar.appendChild(text12);
text12.style.color = '#cbbdbd';
text12.style.display = 'flex';
text12.style.justifyContent = 'center';
text12.style.margin = '20px';

/*sidebar text "Errors"*/
let text13 = document.createElement('div');
text13.setAttribute('class','errors');
var value12 = document.createTextNode("Errors");
text13.appendChild(value12);
sidebar.appendChild(text13);
text13.style.color = '#cbbdbd';
text13.style.display = 'flex';
text13.style.justifyContent = 'center';
text13.style.margin = '20px';
text13.style.marginBottom = '80px';

/*main text*/
let main = document.createElement('div');
main.setAttribute('class','ma');
container.appendChild(main);
main.style.width = '80%';

/*header*/
let header = document.createElement('div');
header.setAttribute('class','head');
main.appendChild(header);
header.style.width = '100%';
header.style.backgroundColor = 'white';
header.style.display = 'flex';
header.style.height = '90px';
header.style.alignItems = 'center';
header.style.border = '1px solid beige';

//header first half
let ht = document.createElement('div');
ht.setAttribute('class','headtext');
header.appendChild(ht);
ht.style.width = '50%';
ht.style.display = 'flex';

/*header Dashboard*/
let head1 = document.createElement('div');
head1.setAttribute('class','dashbd');
var value13 = document.createTextNode('Dashboard');
head1.appendChild(value13);
ht.appendChild(head1);
head1.style.display = 'flex';
head1.style.width = '100px';
head1.style.color = 'blue';
head1.style.backgroundColor = '#f7f2f2';
head1.style.alignItems = 'center';
head1.style.justifyContent = 'center';
head1.style.height = '30px';

/*header builder*/
let head2 = document.createElement('div');
head2.setAttribute('class','build');
var value14 = document.createTextNode('Builder');
head2.appendChild(value14);
ht.appendChild(head2);
head2.style.display = 'flex';
head2.style.width = '100px';
head2.style.color = 'grey';
head2.style.alignItems = 'center';
head2.style.justifyContent = 'center';
head2.style.height = '30px';

/*header Material UI*/
let head3 = document.createElement('div');
head3.setAttribute('class','mat');
var value15 = document.createTextNode('Material UI');
head3.appendChild(value15);
ht.appendChild(head3);
head3.style.display = 'flex';
head3.style.width = '100px';
head3.style.color = 'grey';
head3.style.alignItems = 'center';
head3.style.justifyContent = 'center';
head3.style.height = '30px';

/*header NgBootstrap*/
let head4 = document.createElement('div');
head4.setAttribute('class','ngb');
var value16 = document.createTextNode('NgBootstrap');
head4.appendChild(value16);
ht.appendChild(head4);
head4.style.display = 'flex';
head4.style.width = '100px';
head4.style.color = 'grey';
head4.style.alignItems = 'center';
head4.style.justifyContent = 'center';
head4.style.height = '30px';

/*Custom*/
let head5 = document.createElement('div');
head5.setAttribute('class','cus');
var value17 = document.createTextNode('Custom');
head5.appendChild(value17);
ht.appendChild(head5);
head5.style.display = 'flex';
head5.style.width = '100px';
head5.style.color = 'grey';
head5.style.alignItems = 'center';
head5.style.justifyContent = 'center';
head5.style.height = '30px';

// header icons
let hi = document.createElement('div');
hi.setAttribute('class','headicons');
header.appendChild(hi);
hi.style.width = '50%';
hi.style.display = 'flex';
hi.style.justifyContent = 'flex-end';
hi.style.marginRight = '50px';

/*search icon*/
let head6 = document.createElement('i');
head6.setAttribute('class','fa-solid fa-magnifying-glass');
hi.appendChild(head6);
head6.style.display = 'flex';
head6.style.width = '20%';
head6.style.color = '#b4d9f4';
head6.style.justifyContent = 'flex-end';

/*icon2*/

let head7 = document.createElement('i');
head7.setAttribute('class','fa-solid fa-anchor');
hi.appendChild(head7);
head7.style.display = 'flex';
head7.style.marginLeft = '20px';
head7.style.color = '#b4d9f4';
head7.style.justifyContent = 'flex-end';

/*icon3*/
let head8 = document.createElement('i');
head8.setAttribute('class','fa-solid fa-bed');
hi.appendChild(head8);
head8.style.display = 'flex';
head8.style.marginLeft = '20px';
head8.style.color = '#b4d9f4';
head8.style.justifyContent = 'flex-end';

/*icon4*/
let head9 = document.createElement('i');
head9.setAttribute('class','fa-solid fa-basket-shopping');
hi.appendChild(head9);
head9.style.display = 'flex';
head9.style.marginLeft = '20px';
head9.style.color = '#b4d9f4';
head9.style.justifyContent = 'flex-end';

/*icon5*/
let head10 = document.createElement('i');
head10.setAttribute('class','fa-solid fa-braille');
hi.appendChild(head10);
head10.style.display = 'flex';
head10.style.marginLeft = '20px';
head10.style.color = '#b4d9f4';
head10.style.justifyContent = 'flex-end';

/*icon6*/
let head11 = document.createElement('i');
head11.setAttribute('class','fa-solid fa-beer-mug-empty');
hi.appendChild(head11);
head11.style.display = 'flex';
head11.style.marginLeft = '20px';
head11.style.color = '#b4d9f4';
head11.style.justifyContent = 'flex-end';

/*text 'Hi Sean'*/
let head12 = document.createElement('div');
head12.setAttribute('class','hi');
var value18 = document.createTextNode('Hi Sean');
head12.appendChild(value18);
hi.appendChild(head12);
head12.style.color = 'black';
head12.style.marginLeft = '20px';

/*letter*/
let head13 = document.createElement('div');
head13.setAttribute('class','letter');
var value19 = document.createTextNode('S');
head13.appendChild(value19);
hi.appendChild(head13);
head13.style.color = 'red';
head13.style.marginLeft = '20px';
head13.style.background = 'skyblue';
head13.style.display = 'flex';
head13.style.width = '30px';
head13.style.justifyContent = 'center';
head13.style.alignItems = 'center';
head13.style.borderRadius = '100%';
head13.style.height = '30px';

//  Dashboard today date
let dash = document.createElement('div');
dash.setAttribute('class','dash');
main.appendChild(dash);
dash.style.display = 'flex';
dash.style.width = '100%';

/*center text 'Dashboard'*/
let center = document.createElement('div');
center.setAttribute('class','center');
var value20 = document.createTextNode('Dashboard');
center.appendChild(value20);
dash.appendChild(center);
center.style.width = '50%';
center.style.backgroundColor = 'white';
center.style.display = 'flex';
center.style.height = '90px';
center.style.alignItems = 'center';
// center.style.border = '1px solid beige';
center.style.justifyContent = 'flex-start';
center.style.marginLeft = '20px';

// Dashboard
let cdshbrd = document.createElement('div');
cdshbrd.setAttribute('class','cd');
var valu20 = document.createTextNode('Dashboard');
cdshbrd.appendChild(valu20);
dash.appendChild(cdshbrd);
cdshbrd.style.display = 'flex';
cdshbrd.style.alignItems = 'center';
cdshbrd.style.width = '100%';
cdshbrd.style.marginLeft = '-250px';
cdshbrd.style.color = '#d8d0d0';

/*Today Date*/
let today = document.createElement('div');
today.setAttribute('class','tdy');
var value21 = document.createTextNode('Today Aug16');
today.appendChild(value21);
dash.appendChild(today);
today.style.color = 'blue';
today.style.width = '50%';
today.style.display = 'flex';
today.style.justifyContent = 'flex-end';
today.style.marginRight = '50px';
today.style.alignContent = 'center';
today.style.alignItems = 'center';

// plus icon
let plus = document.createElement('i');
plus.setAttribute('class','fa-regular fa-square-plus');
today.appendChild(plus);
plus.style.marginLeft = '20px';
plus.style.color = '#b4d9f4';

// footer
let foot = document.createElement('div');
foot.setAttribute('class','footer');
main.appendChild(foot);
foot.style.display = 'flex';
foot.style.width = '100%';
foot.style.height = '550px';
foot.style.backgroundColor = '#efebe5';

// image1
let img1 = document.createElement('img');
img1.setAttribute('src','https://images.designtrends.com/wp-content/uploads/2015/11/30150425/Cool-Plain-Backgrounds1.jpg');
foot.appendChild(img1);
img1.style.display = 'flex';
img1.style.width = '40%';
img1.style.height = '300px';
// img1.style.borderRadius = '5px';
// img1.style.padding = '20px';
img1.style.margin = '30px';


// var txt = document.createElement('div');
// txt.setAttribute('class','scale');
// var value21 = document.createTextNode('Scale');
// txt.appendChild(value21);
// foot.appendChild(txt);

//Subimage1
let img2 = document.createElement('img');
img2.setAttribute('src','https://www.pngmagic.com/product_images/beautiful-blue-color-background.png');
foot.appendChild(img2);
img2.style.display = 'flex';
img2.style.width = '180px';
img2.style.height = '100px';
img2.style.position = 'absolute';
img2.style.top = '480px';
img2.style.right = '900px';
img2.style.border = '1px solid black';
img2.style.borderRadius = '10px';

//subimage2
let img3 = document.createElement('img');
img3.setAttribute('src','https://www.pngmagic.com/product_images/beautiful-blue-color-background.png');
foot.appendChild(img3);
img3.style.display = 'flex';
img3.style.width = '180px';
img3.style.height = '100px';
img3.style.position = 'absolute';
img3.style.top = '480px';
img3.style.right = '700px';
img3.style.border = '1px solid black';
img3.style.borderRadius = '10px';

//subimage4
let img4 = document.createElement('img');
img4.setAttribute('src','https://www.pngmagic.com/product_images/beautiful-blue-color-background.png');
foot.appendChild(img4);
img4.style.display = 'flex';
img4.style.width = '180px';
img4.style.height = '100px';
img4.style.position = 'absolute';
img4.style.top = '600px';
img4.style.right = '900px';
img4.style.border = '1px solid black';
img4.style.borderRadius = '10px';

// subimage5
let img5 = document.createElement('img');
img5.setAttribute('src','https://www.pngmagic.com/product_images/beautiful-blue-color-background.png');
foot.appendChild(img5);
img5.style.display = 'flex';
img5.style.width = '180px';
img5.style.height = '100px';
img5.style.position = 'absolute';
img5.style.top = '600px';
img5.style.right = '700px';
img5.style.border = '1px solid black';
img5.style.borderRadius = '10px';

//my activity
let act = document.createElement('div');
act.setAttribute('class','activity');
var value22 = document.createTextNode('My Activity');
act.appendChild(value22);
foot.appendChild(act);
// act.style.display = 'flex';
act.style.width = '60%';
act.style.padding = '20px';
act.style.marginLeft = '50px';
act.style.backgroundColor = 'white';
act.style.border = '1px solid #d9d1d1';
act.style.justifyContent = 'space-between';
act.style.fontWeight = 'bold';
act.style.margin = '30px';
act.style.borderBottom = 'none';
act.style.marginBottom = '0px';


//sales
let sales = document.createElement('div');
sales.setAttribute('class','sale');
var value23 = document.createTextNode('890,344 Sales');
sales.appendChild(value23);
act.appendChild(sales);
sales.style.display = 'flex';
sales.style.width = '60%';
sales.style.paddingTop = '20px';
sales.style.color = 'grey';

// 8.42
let t1 = document.createElement('div');
t1.setAttribute('class','time1');
var value24 = document.createTextNode('8.42');
t1.appendChild(value24);
act.appendChild(t1);
t1.style.display = 'flex';
t1.style.width = '100%';
t1.style.paddingTop = '30px';
t1.style.color = 'black';

//circle1
let c1 = document.createElement('div');
c1.setAttribute('class','fa-regular fa-circle');
t1.appendChild(c1);
c1.style.marginLeft = '15px';
c1.style.color = 'yellow';

//circle text1
let ct1 = document.createElement('div');
ct1.setAttribute('class','circletext1');
var value25 = document.createTextNode('Outlines keep you honest and keep structure');
ct1.appendChild(value25);
t1.appendChild(ct1);
ct1.style.marginLeft = '10px';
ct1.style.color = '#e1dbdb';
ct1.style.fontSize = '15px';

// 10.00
let t2 = document.createElement('div');
t2.setAttribute('class','time2');
var value26 = document.createTextNode('10.00');
t2.appendChild(value26);
act.appendChild(t2);
t2.style.display = 'flex';
t2.style.width = '100%';
t2.style.paddingTop = '25px';
t2.style.color = 'black';

//circle2
let c2 = document.createElement('div');
c2.setAttribute('class','fa-regular fa-circle');
t2.appendChild(c2);
c2.style.marginLeft = '8px';
c2.style.color = '#73d9f3';

//circle text2
let ct2 = document.createElement('div');
ct2.setAttribute('class','circletext2');
var value27 = document.createTextNode('AEOL meeting');
ct2.appendChild(value27);
t2.appendChild(ct2);
ct2.style.marginLeft = '10px';
ct2.style.color = 'black';
ct2.style.fontSize = '15px';

//14.37
let t3 = document.createElement('div');
t3.setAttribute('class','time3');
var value28 = document.createTextNode('14.37');
t3.appendChild(value28);
act.appendChild(t3);
t3.style.display = 'flex';
t3.style.width = '100%';
t3.style.paddingTop = '25px';
t3.style.color = 'black';

//circle3
let c3 = document.createElement('div');
c3.setAttribute('class','fa-regular fa-circle');
t3.appendChild(c3);
c3.style.marginLeft = '8px';
c3.style.color = 'red';

//circle text3
let ct3 = document.createElement('div');
ct3.setAttribute('class','circletext2');
var value29 = document.createTextNode('Make deposit USD 700.to ESL');
ct3.appendChild(value29);
t3.appendChild(ct3);
ct3.style.marginLeft = '10px';
ct3.style.color = 'black';
ct3.style.fontSize = '15px';

// 16.50
let t4 = document.createElement('div');
t4.setAttribute('class','time4');
var value29 = document.createTextNode('16.50');
t4.appendChild(value29);
act.appendChild(t4);
t4.style.display = 'flex';
t4.style.width = '100%';
t4.style.paddingTop = '25px';
t4.style.color = 'black';

// circle4
let c4 = document.createElement('div');
c4.setAttribute('class','fa-regular fa-circle');
t4.appendChild(c4);
c4.style.marginLeft = '8px';
c4.style.color = '#41d6dd';

//circle text4
let ct4 = document.createElement('div');
ct4.setAttribute('class','circletext4');
var value30 = document.createTextNode('Indulging in poorly driving and keep structure keep great');
ct4.appendChild(value30);
t4.appendChild(ct4);
ct4.style.marginLeft = '10px';
ct4.style.color = '#e1dbdb';
ct4.style.fontSize = '15px';
ct4.style.width = '65%';

// 21.03
let t5 = document.createElement('div');
t5.setAttribute('class','time5');
var value31 = document.createTextNode('21.03');
t5.appendChild(value31);
act.appendChild(t5);
t5.style.display = 'flex';
t5.style.width = '100%';
t5.style.paddingTop = '25px';
t5.style.color = 'black';

// circle5
let c5 = document.createElement('div');
c5.setAttribute('class','fa-regular fa-circle');
t5.appendChild(c5);
c5.style.marginLeft = '8px';
c5.style.color = 'red';

//circle text5
let ct5 = document.createElement('div');
ct5.setAttribute('class','circletext5');
var value32 = document.createTextNode('New order placed #XF-2356');
ct5.appendChild(value32);
t5.appendChild(ct5);
ct5.style.marginLeft = '10px';
ct5.style.color = 'black';
ct5.style.fontSize = '15px';
ct5.style.width = '65%';

// 23.07
let t6 = document.createElement('div');
t6.setAttribute('class','time6');
var value33 = document.createTextNode('23.07');
t6.appendChild(value33);
act.appendChild(t6);
t6.style.display = 'flex';
t6.style.width = '80%';
t6.style.paddingTop = '25px';
t6.style.color = 'black';

// circle6
let c6 = document.createElement('div');
c6.setAttribute('class','fa-regular fa-circle');
t6.appendChild(c6);
c6.style.marginLeft = '8px';
c6.style.color = '#9f38d8';

//circle text6
let ct6 = document.createElement('div');
ct6.setAttribute('class','circletext5');
var value33 = document.createTextNode('Outlines keep you and indulging in poorly driving');
ct6.appendChild(value33);
t6.appendChild(ct6);
ct6.style.marginLeft = '10px';
ct6.style.color = '#e1dbdb';
ct6.style.fontSize = '15px';
ct6.style.width = '65%';

// 16.50
let t7 = document.createElement('div');
t7.setAttribute('class','time4');
var value34 = document.createTextNode('16.50');
t7.appendChild(value34);
act.appendChild(t7);
t7.style.display = 'flex';
t7.style.width = '100%';
t7.style.paddingTop = '25px';
t7.style.color = 'black';

// circle7
let c7 = document.createElement('div');
c7.setAttribute('class','fa-regular fa-circle');
t7.appendChild(c7);
c7.style.marginLeft = '8px';
c7.style.color = '#41d6dd';

//circle text4
let ct7 = document.createElement('div');
ct7.setAttribute('class','circletext7');
var value35 = document.createTextNode('Indulging in poorly driving and keep structure keep great');
ct7.appendChild(value35);
t7.appendChild(ct7);
ct7.style.marginLeft = '10px';
ct7.style.color = '#e1dbdb';
ct7.style.fontSize = '15px';
ct7.style.width = '65%';

// 21.03
let t8 = document.createElement('div');
t8.setAttribute('class','time8');
var value36 = document.createTextNode('21.03');
t8.appendChild(value36);
act.appendChild(t8);
t8.style.display = 'flex';
t8.style.width = '100%';
t8.style.paddingTop = '25px';
t8.style.color = 'black';

// circle5
let c8 = document.createElement('div');
c8.setAttribute('class','fa-regular fa-circle');
t8.appendChild(c8);
c8.style.marginLeft = '8px';
c8.style.color = 'red';

//circle text8
let ct8 = document.createElement('div');
ct8.setAttribute('class','circletext5');
var value37 = document.createTextNode('New order placed #XF-2356');
ct8.appendChild(value37);
t8.appendChild(ct8);
ct8.style.marginLeft = '10px';
ct8.style.color = 'black';
ct8.style.fontSize = '15px';
ct8.style.width = '65%';




























