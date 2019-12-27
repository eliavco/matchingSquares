exports.turn = (card, i) => {
    t = new Object(card);
    if (i === 0) {
        return t;
    }
    if (i === 1) {
        return { top: t.left, right: t.top, bottom: t.right , left: t.bottom };
    }
    if (i === 2) {
        return { top: t.bottom, right: t.left, bottom: t.top , left: t.right };
    }
    if (i === 3) {
        return { top: t.right, right: t.bottom, bottom: t.left , left: t.top };
    }
};