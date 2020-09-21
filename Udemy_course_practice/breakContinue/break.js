//break and continue
var ar = ['gvnd','shrb','pnkj','knwr'];

for(var i=0;i< ar.length; i++){
    if(typeof ar[i] !== 'string')
    break;
    console.log(ar[i]);
}
for(var i=0;i< ar.length; i++){
    if( ar[i] === 'shrb')
    continue ;
    console.log(ar[i]);
}