(function(){
  var names=['about','skills','projects','blog','resume','contact'];
  function show(name,scroll){
    if(names.indexOf(name)<0) name='about';
    names.forEach(function(n){ document.getElementById('view-'+n).hidden = (n!==name); });
    document.querySelectorAll('.tabs a').forEach(function(a){
      if(a.getAttribute('data-view')===name) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
    });
    if(scroll) window.scrollTo(0,0);
  }
  document.addEventListener('click',function(ev){
    var a=ev.target.closest('a[data-view]'); if(!a) return;
    ev.preventDefault();
    var name=a.getAttribute('data-view');
    show(name,true);
    try{ history.replaceState(null,'','#'+name); }catch(e){}
  });
  window.addEventListener('hashchange',function(){ show(location.hash.slice(1),true); });
  show(location.hash.slice(1),false);
})();
