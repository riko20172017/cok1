export default ({ menuel, menusel, setMenuel, setMenusel, menuitems }) => {
    const menulenght = menuitems.length;
    const submenulenght = menuitems[menuel - 1].submenu.length;

    const nextmenuel = (menusel + 1) > submenulenght ? (menuel + 1) : menuel
    const nextmenusel = (menusel + 1) > submenulenght ? 1 : (menusel + 1)

    const prevmenuel = (menusel - 1) > submenulenght ? (menuel - 1) : menuel
    const prevmenusel = (menusel - 1) > submenulenght ? 1 : (menusel - 1)
    
    return <div>
        <a href={`/content/eom_1/content/1.html#${nextmenuel}.${nextmenusel}`}
            onClick={() => { setMenuel(nextmenuel); setMenusel(nextmenusel) }}
            target="frame"
        >{ nextmenuel <= menulenght && "Вперед"}</a>
        <a href="">Назад {prevmenuel} {prevmenusel}</a>
    </div >
}