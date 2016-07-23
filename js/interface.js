var mCampus="ALL";
function select(campus,from){
	mCampus = campus;
	var postlist = document.getElementById("staggered-post");
	var lis = postlist.getElementsByTagName("li");
	for (var il=0;il < lis.length;il++) {
		var li = lis[il];
		if($(li).hasClass("hide")){
			$(li).removeClass("hide");
			$(li).addClass("show");
		}
		if(campus == 'ALL'){
			continue;
		}
		if(!$(li).hasClass(campus)){
			$(li).addClass("hide");
			$(li).removeClass("show");
		}
	}
	var fromDirection = from || "left";
	Materialize.divideList("#staggered-post");
};

function selectAll(){
	select("ALL");
}
function selectA(){
	select("A");
}
function selectB(){
	select("B");
}
function selectC(){
	select("C");
}
function selectD(){
	select("D");
}

function selectCategory(category,from){
	var category = category || 'ALL';
	var fromDirection = from || "left";
	console.log(category);
	console.log(fromDirection);
	var postlist = document.getElementById("staggered-post");
	var lis = postlist.getElementsByTagName("li");
	for (var il=0;il < lis.length;il++) {
		var li = lis[il];
		if($(li).hasClass("hide") && $(li).hasClass(mCampus)){
			$(li).removeClass("hide");
			$(li).addClass("show");
		}
		if(category === 'ALL' || category === '所有'){
			continue;
		}
		if(!$(li).hasClass(category) && $(li).hasClass(mCampus)){
			$(li).addClass("hide");
			$(li).removeClass("show");
		}
	}
	Materialize.divideList("#staggered-post");}