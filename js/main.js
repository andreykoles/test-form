	$(document).ready(function() {
		$('.open-more').on('click',function(){
			var inc = 1;
			$('.comment-items').find('.comment').each(function() {
				if ($(this).css('display') == 'none' && inc <= 6) {
					$(this).show(500);													
					inc += 1;
				}					
			});
		}); 


		$(document).on("click", "#add_comment", function() {
			addComment();
		});

		$("body").keydown(function(e) {
			if (e.ctrlKey && e.keyCode == 13) {
			    addComment();
			}
		});


	}); 

	function addComment() {

		var comment = $("#new-comment").val();
		var name = $("#new-name").val();

		if (comment && name) {

			var newComment = $("<div/>", {
				"class": "comment"
			});

			$("<span/>", {
				'class': 'comment-name',
				text: name
			}).appendTo(newComment);

			$("<span/>", {
				'class': 'comment-data',
				text: (new Date()).toString(' dd.MM.yyyy')
			}).appendTo(newComment);

			$("<p/>", {
				'class': '',
				text: comment
			}).appendTo(newComment);

			newComment.appendTo("#comments");

			$('#comment-count').text(parseInt($('#comment-count').text()) + 1);

			$("#new-comment").val('');
			$("#new-name").val('');

		} else {

			alert('Enter name and comment.');

		}

	}