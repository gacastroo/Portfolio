import React, { useState, useEffect, useRef } from "react";
import { workData } from "/src/components/data/data.js";

const categoryIcon = {
    web:    { icon: "uil uil-globe",           label: "Web",    color: "#00d9b8" },
    backend:    { icon: "uil uil-mobile-android",  label: "Backend",    color: "#5b9cf6" },
    automation: { icon: "uil uil-vector-square",   label: "Automation", color: "#c084fc" },
};

function useTypewriter(text, speed = 22, active = false) {
    const [displayed, setDisplayed] = useState("");
    useEffect(() => {
        if (!active) { setDisplayed(""); return; }
        setDisplayed("");
        let i = 0;
        const t = setInterval(() => {
            setDisplayed(text.slice(0, ++i));
            if (i >= text.length) clearInterval(t);
        }, speed);
        return () => clearInterval(t);
    }, [text, active]);
    return displayed;
}

const Scanlines = () => <div className="fs-scanlines" aria-hidden="true" />;

const FileIcon = ({ item, index, isOpen, onClick }) => {
    const cat = categoryIcon[item.filter] || categoryIcon.web;
    return (
        <button
            className={`fs-file${isOpen ? " fs-file--open" : ""}`}
            onClick={onClick}
            style={{ animationDelay: `${index * 60}ms` }}
            title={item.title}
        >
            <div className="fs-file-icon" style={{ "--cat-color": cat.color }}>
                <i className={cat.icon} />
                <span className="fs-file-ext">.{item.filter}</span>
            </div>
            <span className="fs-file-name">{item.title}</span>
            <span className="fs-file-date">{item.details.created}</span>
        </button>
    );
};

const DetailWindow = ({ item, onClose }) => {
    const cat = categoryIcon[item.filter] || categoryIcon.web;
    const desc = useTypewriter(item.details.description, 22, true);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const drag = useRef({ active: false, ox: 0, oy: 0 });

    const onMouseDown = (e) => {
        if (e.target.closest(".fs-win-controls")) return;
        drag.current = { active: true, ox: e.clientX - pos.x, oy: e.clientY - pos.y };
        const move = (e) => {
            if (!drag.current.active) return;
            setPos({ x: e.clientX - drag.current.ox, y: e.clientY - drag.current.oy });
        };
        const up = () => { drag.current.active = false; window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", up);
    };

    return (
        <div className="fs-window" style={{ transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))` }}>
            <div className="fs-win-bar" onMouseDown={onMouseDown}>
                <div className="fs-win-controls">
                    <button className="fs-wc fs-wc--close" onClick={onClose} title="Close" />
                    <button className="fs-wc fs-wc--min" title="Minimise" />
                    <button className="fs-wc fs-wc--max" title="Maximise" />
                </div>
                <span className="fs-win-title">
          <i className={cat.icon} style={{ color: cat.color }} /> {item.title} — {item.details.subtitle}
        </span>
                <span className="fs-win-tag" style={{ "--cat-color": cat.color }}>{cat.label}</span>
            </div>

            <div className="fs-win-addr">
                <span className="fs-addr-prompt">~/projects/</span>
                <span className="fs-addr-path">{item.title.toLowerCase().replace(/\s+/g, "-")}</span>
                <span className="fs-addr-cursor" />
            </div>

            <div className="fs-win-body">
                <div className="fs-win-preview">
                    {item.img
                        ? <img src={item.img} alt={item.title} />
                        : (
                            <div className="fs-win-placeholder">
                                <i className={cat.icon} style={{ color: cat.color }} />
                                <span>No preview available</span>
                            </div>
                        )
                    }
                    <div className="fs-preview-overlay">
                        <a href={item.details.link} className="fs-preview-btn" target="_blank" rel="noreferrer">
                            <i className="uil uil-external-link-alt" /> Live demo
                        </a>
                    </div>
                </div>

                <div className="fs-win-meta">
                    <h3 className="fs-win-heading">{item.details.title}</h3>
                    <p className="fs-win-desc">{desc}<span className="fs-caret">▌</span></p>
                    <div className="fs-meta-grid">
                        <div className="fs-meta-row"><span className="fs-meta-key"><i className="uil uil-calender" /> Created</span><span className="fs-meta-val">{item.details.created}</span></div>
                        <div className="fs-meta-row"><span className="fs-meta-key"><i className="uil uil-layer-group" /> Stack</span><span className="fs-meta-val">{item.details.tech}</span></div>
                        <div className="fs-meta-row"><span className="fs-meta-key"><i className="uil uil-user-circle" /> Role</span><span className="fs-meta-val">{item.details.role}</span></div>
                        <div className="fs-meta-row"><span className="fs-meta-key"><i className="uil uil-tag-alt" /> Category</span><span className="fs-meta-val" style={{ color: cat.color }}>{cat.label}</span></div>
                    </div>
                    <a href={item.details.link} className="fs-win-cta" target="_blank" rel="noreferrer">
                        <i className="uil uil-arrow-up-right" /> View project
                    </a>
                </div>
            </div>
        </div>
    );
};

const Work = () => {
    const [filter, setFilter]    = useState("all");
    const [openItem, setOpenItem] = useState(null);
    const [statusMsg, setStatus] = useState("6 items · Ready");
    const [time, setTime]        = useState("");
    const filters = ["all", "web", "backend", "automation"];

    useEffect(() => {
        const tick = () => setTime(new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }));
        tick();
        const id = setInterval(tick, 60000);
        return () => clearInterval(id);
    }, []);

    const filtered = filter === "all" ? workData : workData.filter(w => w.filter === filter);

    const handleOpen = (item) => {
        setOpenItem(item);
        setStatus(`Opening "${item.title}"…`);
        setTimeout(() => setStatus(`${filtered.length} items · ${item.title} open`), 600);
    };

    const handleClose = () => {
        setOpenItem(null);
        setStatus(`${filtered.length} items · Ready`);
    };

    const handleFilter = (f) => {
        setFilter(f);
        const count = f === "all" ? workData.length : workData.filter(w => w.filter === f).length;
        setStatus(`${count} items · ${f === "all" ? "All projects" : f.charAt(0).toUpperCase() + f.slice(1)}`);
        if (openItem && f !== "all" && openItem.filter !== f) handleClose();
    };

    return (
        <>
            <section className="work section" id="work">
                <h2 className="section-title" data-heading="My Portfolio">Recent Works</h2>

                <div className="fs-shell container">
                    <Scanlines />

                    <div className="fs-toolbar">
                        <div className="fs-toolbar-left">
                            <span className="fs-toolbar-logo"><i className="uil uil-folder-open" /> projects/</span>
                            <div className="fs-filters">
                                {filters.map(f => (
                                    <button
                                        key={f}
                                        className={`fs-filter${filter === f ? " fs-filter--active" : ""}`}
                                        onClick={() => handleFilter(f)}
                                    >
                                        {f === "all" ? <i className="uil uil-apps" /> : <i className={categoryIcon[f].icon} />}
                                        {f.charAt(0).toUpperCase() + f.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="fs-toolbar-right">
                            <span className="fs-clock"><i className="uil uil-clock" /> {time}</span>
                        </div>
                    </div>

                    <div className="fs-grid">
                        {filtered.map((item, i) => (
                            <FileIcon key={item.id} item={item} index={i} isOpen={openItem?.id === item.id} onClick={() => handleOpen(item)} />
                        ))}
                    </div>

                    <div className="fs-statusbar">
                        <span className="fs-status-dot" />
                        <span className="fs-status-msg">{statusMsg}</span>
                        <span className="fs-status-hint"><i className="uil uil-mouse-alt" /> click to open · drag window to move</span>
                    </div>
                </div>
            </section>

            {openItem && (
                <div className="fs-overlay" onClick={(e) => e.target === e.currentTarget && handleClose()}>
                    <DetailWindow item={openItem} onClose={handleClose} />
                </div>
            )}
        </>
    );
};

export default Work;