var animData = {
    container: document.getElementById('container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/assets/animation/data.json'
};
var anim = bodymovin.loadAnimation(animData);;
window.onresize = anim.resize.bind(anim);
