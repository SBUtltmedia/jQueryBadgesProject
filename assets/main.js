$(function() {
$.ajax({
    url: 'https://www.codeschool.com/users/pstdenis.json',
    dataType: 'jsonp',
    success: function(response) {
        for (i in response.courses.completed){
            
            var div =$('<div/>',{class:"course"});
            var h3=$('<h3/>').text(response.courses.completed[i].title)
            div.append(h3)
            var img=$('<img/>',{src:response.courses.completed[i].badge})
               $(div).append(img)
                 var img=$('<a/>',{href:response.courses.completed[i].url,target:"_blank",class:"btn  btn-primary"}).text("See Course")
               $(div).append(img)
            $('#badges').append(div)
            
          
            
        }
      // handle response
    }
  });


});