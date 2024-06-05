function search(){
    var input = document.getElementById('keyword').value;
    alert(input);
    ps.keywordSearch(input, placesSearchCB);
}