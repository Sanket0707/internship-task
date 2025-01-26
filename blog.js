document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');
  
    commentForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const commentInput = document.getElementById('comment-input');
      const commentText = commentInput.value;
  
      if (commentText) {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `
          <p>${commentText}</p>
          <small>Posted just now</small>
        `;
        commentList.appendChild(newComment);
        commentInput.value = '';
      }
    });
  });
  