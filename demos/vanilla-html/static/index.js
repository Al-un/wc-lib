// --- Get elements

const memoTitle = document.getElementById('memo-title');
const memoAdd = document.getElementById('memo-add');
const memosList = document.getElementById('memos-list');

// --- Local variables

/**
 * Keep the list of memos locally to keep it synchronized with the
 * memos list inside the <super-xxx-memos-list> component
 */
let memos = [];

// --- Event listener handling

/** Create a new memo from a text input field */
const onDoSomethingWithTitle = () => {
  if (memoTitle) {
    const memo = {
      id: parseInt(1000 * Math.random()), // Or to be provided by some API
      title: memoTitle.value,
      text: 'Text field to be added', // Laziness
    };

    // Update local copy
    memos.push(memo);
    // Update super-xxx-memos-list component copy
    memosList.setAttribute('memos', JSON.stringify(memos));

    // Reset input
    memoTitle.value = '';
  }
};

/** Update local memos list when a memo is deleted */
const onMemoDeleted = (ev) => {
  const { memoId } = ev.detail;

  memos = memos.filter((m) => m.id !== memoId);
};

/**
 * Update local memos list when a memo is added inside the memo list
 * component
 */
const onMemoAdded = (ev) => {
  const newMemo = JSON.parse(ev.detail.memo);
  memos.push(newMemo);
};

// --- Event listeners binding

memoAdd.addEventListener('click', onDoSomethingWithTitle);
memosList.addEventListener('delete', onMemoDeleted);
memosList.addEventListener('add', onMemoAdded);
