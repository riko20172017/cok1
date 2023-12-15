export default ({ menuel, menusel, setMenuel, setMenusel, menuitems }) => {
    const menulenght = menuitems.length;
    let submenulenght = menuitems[menuel - 1].submenu.length;

    const nextmenuel = (menusel + 1) > submenulenght ? (menuel + 1) : menuel
    const nextmenusel = (menusel + 1) > submenulenght ? 1 : (menusel + 1)


    return <div className="flex f-justify-center text-center sidebar-pagin f-align-center height-100">
        <div className="f-grow-1">
            {isPrev() && <button>
                <a href={`/content/eom_1/content/${getPrevElem()}.${getLastSubELem()}.html`}
                    onClick={() => { setMenuel(getPrevElem()); setMenusel(getLastSubELem()) }}
                    target="frame">
                    Назад
                </a>
            </button>}
        </div>
        <div className="pagination-index">
            <span className="inline-block text-center">{menuel}</span>
            &nbsp;-&nbsp;
            <span className="inline-block text-center">{menusel}</span>
        </div>
        <div className="f-grow-1">
            {isNext() && <button>
                <a href={`/content/eom_1/content/${nextmenuel}.${nextmenusel}.html`}
                    onClick={() => { setMenuel(nextmenuel); setMenusel(nextmenusel) }}
                    target="frame">
                    Вперед
                </a>
            </button>}
        </div>
    </div >

    function getPrevElem() {
        if (menusel > 1) {
            return menuel;
        }
        else {
            if (menuel < 2) {
                return 1
            }
            else {
                return menuel - 1
            }
        }
    }

    function getLastSubELem() {
        if (menusel > 1) {
            return menusel - 1
        }
        else {
            if (menuel < 2) {
                return 1
            }
            else {
                return menuitems[menuel - 2].submenu.length
            }
        }
    }

    function isPrev() {
        return !(menuel == 1 && menusel == 1)
    }

    function isNext() {
        return nextmenuel <= menulenght
    }
}