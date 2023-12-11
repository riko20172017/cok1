// Боковое меню общее для всех ЭОМ
//

export default ({ menuitems, setMenuel, setMenusel, menuel, menusel, eom }) => {
    return <div className="topic-title">
        {menuitems.map((el, j) => {
            j++
            return <div>
                <div className={menuel == j && "menuopen"}>
                    <a href={`/content/eom_${eom}/content/1.html#${j}`} target="frame">
                        <button
                            onClick={() => { setMenuel(j); setMenusel(1) }}
                            className="topic-title-btn pointer">{j}. {el.title}</button>
                    </a>
                    <div className="page-title">
                        {el.submenu.map((el, i) => {
                            i++
                            return <div>
                                <a className={menusel == i && "submenuopen"}
                                    onClick={() => setMenusel(i)}
                                    href={`/content/eom_${eom}/content/1.html#${j}.${i}`}
                                    target="frame">{j}.{i} {el.title}</a>
                            </div>
                        })}
                    </div>
                </div>
                <div class="nodeSpacer"></div>
            </div>
        })}
    </div>
}