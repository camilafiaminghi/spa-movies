const truncate = (text, len=30, clamp='...') => {
	if (text.length <= len) return text;

	let tcText = text.slice(0, len - clamp.length);
	let last = tcText.length - 1;

	while (last > 0 && tcText[last] !== ' ' && tcText[last] !== clamp[0]) last -= 1;

	last = last || len - clamp.length;
	tcText =  tcText.slice(0, last);

	return tcText + clamp;
}

export default truncate
