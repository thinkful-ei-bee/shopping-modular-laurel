const store = (function () {
    const foo = 'bar';
    const items = [
        { id: cuid(), name: 'apples', checked: false },
        { id: cuid(), name: 'oranges', checked: false },
        { id: cuid(), name: 'milk', checked: true },
        { id: cuid(), name: 'bread', checked: false }
    ];
        let hideCheckedItems = false;
        let searchTerm = '';
        return {
            foo,
            items,
        };
}());
const findAndToggleChecked = function (id) {
    const idFound = this.findById(id);
    idFound.checked = !idFound.checked;
};