let $ = document;
let autoCompleteWrapper = $.querySelector(".search-input");
let searchInpueElem = $.querySelector("input");
let autoCompleteBox = $.querySelector(".autocom-box");

searchInpueElem.addEventListener("keyup", function () {
    let searchValue = searchInpueElem.value;

    if (searchValue) {
        autoCompleteWrapper.classList.add("active");

        let filteredWords = suggestions.filter(function (word) {
            return word.toLowerCase().startsWith(searchValue.toLowerCase());
            // return word.toLowerCase().includes(searchValue.toLowerCase())
        });

        suggestionWordsGenerator(filteredWords);
    } else {
        autoCompleteWrapper.classList.remove("active");
    }
});

function suggestionWordsGenerator(wordsArray) {
    let listItemsArray = wordsArray.map(function (word) {
        return "<li>" + word + "</li>";
    });

    let customListItem;
    if (!listItemsArray.length) {
        customListItem = "<li>" + searchInpueElem.value + "</li>";
    } else {
        customListItem = listItemsArray.join("");
    }

    autoCompleteBox.innerHTML = customListItem;
    select();
}

function select() {
    let allListItems = autoCompleteBox.querySelectorAll("li");
    allListItems.forEach(function (wordItem) {
        wordItem.addEventListener("click", function (event) {
            searchInpueElem.value = event.target.textContent;
            autoCompleteWrapper.classList.remove("active");
        });
    });
}
