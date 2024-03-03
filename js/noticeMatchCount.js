function getCheckedCount(targetId) {
  const $inputs = document.querySelectorAll(targetId);

  return Array.from($inputs).filter((input) => input.checked).length;
}

function noticeMatchCount() {
  const favoriteMovieCount = getCheckedCount('.favoriteMovieInput');
  const name = document.querySelector('#userName').value;

  if (name.trim() === '') return alert('익명의 크루님! 이름을 알려줄 수 있나요?');
  if (favoriteMovieCount === 0)
    return alert(
      `${name}님, 맘에 드신 영화가 없었다니 아쉬워요. 그치만 저는 어떤 영화든 일단 좋아하니까 적극 추천해주시면 감사할 것 같아요 ! ☺️`,
    );
  if (name === '웨디') return alert('저랑 이름이 같다니 저희는 만나면 안되겠네요..');

  alert(`${name}님, 저와 ${favoriteMovieCount}개의 취향이 같으시네요!`);
}

document.querySelector('#favoriteMoviesSubmit').addEventListener('click', (event) => {
  event.preventDefault();
  noticeMatchCount();
});
