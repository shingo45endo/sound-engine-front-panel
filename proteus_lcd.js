// Constants about metrics
const LCD_PADDING_X = 25;
const LCD_PADDING_Y = 15;
const LCD_GAP_Y = 20;

const CHAR_COL = 16;
const CHAR_ROW =  2;
const CHAR_NUM = CHAR_COL * CHAR_ROW;

const FONT_WIDTH  = 50;
const FONT_HEIGHT = 70;
const FONT_GAP = 10;

const LCD_WIDTH  = LCD_PADDING_X + (FONT_WIDTH  + FONT_GAP)  * CHAR_COL - FONT_GAP  + LCD_PADDING_X;
const LCD_HEIGHT = LCD_PADDING_Y + (FONT_HEIGHT + LCD_GAP_Y) * CHAR_ROW - LCD_GAP_Y + FONT_GAP + LCD_PADDING_Y;

// 5x7 font bitmap data
const fontBits = Object.freeze({
	' ':      [0b0000000, 0b0000000, 0b0000000, 0b0000000, 0b0000000],
	'!':      [0b0000000, 0b0000000, 0b1011111, 0b0000000, 0b0000000],
	'"':      [0b0000000, 0b0000111, 0b0000000, 0b0000111, 0b0000000],
	'#':      [0b0010100, 0b1111111, 0b0010100, 0b1111111, 0b0010100],
	'$':      [0b0100100, 0b0101010, 0b1111111, 0b0101010, 0b0010010],
	'%':      [0b0100011, 0b0010011, 0b0001000, 0b1100100, 0b1100010],
	'&':      [0b0110110, 0b1001001, 0b1010101, 0b0100010, 0b1010000],
	'\'':     [0b0000000, 0b0000101, 0b0000011, 0b0000000, 0b0000000],
	'(':      [0b0000000, 0b0011100, 0b0100010, 0b1000001, 0b0000000],
	')':      [0b0000000, 0b1000001, 0b0100010, 0b0011100, 0b0000000],
	'*':      [0b0010100, 0b0001000, 0b0111110, 0b0001000, 0b0010100],
	'+':      [0b0001000, 0b0001000, 0b0111110, 0b0001000, 0b0001000],
	',':      [0b0000000, 0b1010000, 0b0110000, 0b0000000, 0b0000000],
	'-':      [0b0001000, 0b0001000, 0b0001000, 0b0001000, 0b0001000],
	'.':      [0b0000000, 0b1100000, 0b1100000, 0b0000000, 0b0000000],
	'/':      [0b0100000, 0b0010000, 0b0001000, 0b0000100, 0b0000010],
	'0':      [0b0111110, 0b1010001, 0b1001001, 0b1000101, 0b0111110],
	'1':      [0b0000000, 0b1000010, 0b1111111, 0b1000000, 0b0000000],
	'2':      [0b1000010, 0b1100001, 0b1010001, 0b1001001, 0b1000110],
	'3':      [0b0100001, 0b1000001, 0b1000101, 0b1001011, 0b0110001],
	'4':      [0b0011000, 0b0010100, 0b0010010, 0b1111111, 0b0010000],
	'5':      [0b0100111, 0b1000101, 0b1000101, 0b1000101, 0b0111001],
	'6':      [0b0111100, 0b1001010, 0b1001001, 0b1001001, 0b0110000],
	'7':      [0b0000001, 0b1110001, 0b0001001, 0b0000101, 0b0000011],
	'8':      [0b0110110, 0b1001001, 0b1001001, 0b1001001, 0b0110110],
	'9':      [0b0000110, 0b1001001, 0b1001001, 0b0101001, 0b0011110],
	':':      [0b0000000, 0b0110110, 0b0110110, 0b0000000, 0b0000000],
	';':      [0b0000000, 0b1010110, 0b0110110, 0b0000000, 0b0000000],
	'<':      [0b0000000, 0b0001000, 0b0010100, 0b0100010, 0b1000001],
	'=':      [0b0010100, 0b0010100, 0b0010100, 0b0010100, 0b0010100],
	'>':      [0b1000001, 0b0100010, 0b0010100, 0b0001000, 0b0000000],
	'?':      [0b0000010, 0b0000001, 0b1010001, 0b0001001, 0b0000110],
	'@':      [0b0110010, 0b1001001, 0b1111001, 0b1000001, 0b0111110],
	'A':      [0b1111110, 0b0010001, 0b0010001, 0b0010001, 0b1111110],
	'B':      [0b1111111, 0b1001001, 0b1001001, 0b1001001, 0b0110110],
	'C':      [0b0111110, 0b1000001, 0b1000001, 0b1000001, 0b0100010],
	'D':      [0b1111111, 0b1000001, 0b1000001, 0b0100010, 0b0011100],
	'E':      [0b1111111, 0b1001001, 0b1001001, 0b1001001, 0b1000001],
	'F':      [0b1111111, 0b0001001, 0b0001001, 0b0001001, 0b0000001],
	'G':      [0b0111110, 0b1000001, 0b1001001, 0b1001001, 0b1111010],
	'H':      [0b1111111, 0b0001000, 0b0001000, 0b0001000, 0b1111111],
	'I':      [0b0000000, 0b1000001, 0b1111111, 0b1000001, 0b0000000],
	'J':      [0b0100000, 0b1000000, 0b1000001, 0b0111111, 0b0000001],
	'K':      [0b1111111, 0b0001000, 0b0010100, 0b0100010, 0b1000001],
	'L':      [0b1111111, 0b1000000, 0b1000000, 0b1000000, 0b1000000],
	'M':      [0b1111111, 0b0000010, 0b0001100, 0b0000010, 0b1111111],
	'N':      [0b1111111, 0b0000100, 0b0001000, 0b0010000, 0b1111111],
	'O':      [0b0111110, 0b1000001, 0b1000001, 0b1000001, 0b0111110],
	'P':      [0b1111111, 0b0001001, 0b0001001, 0b0001001, 0b0000110],
	'Q':      [0b0111110, 0b1000001, 0b1010001, 0b0100001, 0b1011110],
	'R':      [0b1111111, 0b0001001, 0b0011001, 0b0101001, 0b1000110],
	'S':      [0b1000110, 0b1001001, 0b1001001, 0b1001001, 0b0110001],
	'T':      [0b0000001, 0b0000001, 0b1111111, 0b0000001, 0b0000001],
	'U':      [0b0111111, 0b1000000, 0b1000000, 0b1000000, 0b0111111],
	'V':      [0b0011111, 0b0100000, 0b1000000, 0b0100000, 0b0011111],
	'W':      [0b0111111, 0b1000000, 0b0111000, 0b1000000, 0b0111111],
	'X':      [0b1100011, 0b0010100, 0b0001000, 0b0010100, 0b1100011],
	'Y':      [0b0000011, 0b0000100, 0b1111000, 0b0000100, 0b0000011],
	'Z':      [0b1100001, 0b1010001, 0b1001001, 0b1000101, 0b1000011],
	'[':      [0b0000000, 0b0000000, 0b1111111, 0b1000001, 0b1000001],
	'\\':     [0b0000010, 0b0000100, 0b0001000, 0b0010000, 0b0100000],
	']':      [0b1000001, 0b1000001, 0b1111111, 0b0000000, 0b0000000],
	'^':      [0b0000100, 0b0000010, 0b0000001, 0b0000010, 0b0000100],
	'_':      [0b1000000, 0b1000000, 0b1000000, 0b1000000, 0b1000000],
	'`':      [0b0000000, 0b0000001, 0b0000010, 0b0000100, 0b0000000],
	'a':      [0b0100000, 0b1010100, 0b1010100, 0b1010100, 0b1111000],
	'b':      [0b1111111, 0b1001000, 0b1000100, 0b1000100, 0b0111000],
	'c':      [0b0111000, 0b1000100, 0b1000100, 0b1000100, 0b0100000],
	'd':      [0b0111000, 0b1000100, 0b1000100, 0b1001000, 0b1111111],
	'e':      [0b0111000, 0b1010100, 0b1010100, 0b1010100, 0b0011000],
	'f':      [0b0001000, 0b1111110, 0b0001001, 0b0000001, 0b0000010],
	'g':      [0b0001100, 0b1010010, 0b1010010, 0b1010010, 0b0111110],
	'h':      [0b1111111, 0b0001000, 0b0000100, 0b0000100, 0b1111000],
	'i':      [0b0000000, 0b1000100, 0b1111101, 0b1000000, 0b0000000],
	'j':      [0b0100000, 0b1000000, 0b1000100, 0b0111101, 0b0000000],
	'k':      [0b1111111, 0b0010000, 0b0101000, 0b1000100, 0b0000000],
	'l':      [0b0000000, 0b1000001, 0b1111111, 0b1000000, 0b0000000],
	'm':      [0b1111100, 0b0000100, 0b0011000, 0b0000100, 0b1111000],
	'n':      [0b1111100, 0b0001000, 0b0000100, 0b0000100, 0b1111000],
	'o':      [0b0111000, 0b1000100, 0b1000100, 0b1000100, 0b0111000],
	'p':      [0b1111100, 0b0010100, 0b0010100, 0b0010100, 0b0001000],
	'q':      [0b0001000, 0b0010100, 0b0010100, 0b0011000, 0b1111100],
	'r':      [0b1111100, 0b0001000, 0b0000100, 0b0000100, 0b0001000],
	's':      [0b1001000, 0b1010100, 0b1010100, 0b1010100, 0b0100000],
	't':      [0b0000100, 0b0111111, 0b1000100, 0b1000000, 0b0100000],
	'u':      [0b0111100, 0b1000000, 0b1000000, 0b0100000, 0b1111100],
	'v':      [0b0011100, 0b0100000, 0b1000000, 0b0100000, 0b0011100],
	'w':      [0b0111100, 0b1000000, 0b0110000, 0b1000000, 0b0111100],
	'x':      [0b1000100, 0b0101000, 0b0010000, 0b0101000, 0b1000100],
	'y':      [0b0001100, 0b1010000, 0b1010000, 0b1010000, 0b0111100],
	'z':      [0b1000100, 0b1100100, 0b1010100, 0b1001100, 0b1000100],
	'{':      [0b0000000, 0b0001000, 0b0110110, 0b1000001, 0b0000000],
	'|':      [0b0000000, 0b0000000, 0b1111111, 0b0000000, 0b0000000],
	'}':      [0b0000000, 0b1000001, 0b0110110, 0b0001000, 0b0000000],
	'\u007e': [0b0001000, 0b0001000, 0b0101010, 0b0011100, 0b0001000],	// RIGHTWARDS ARROW
	'\u007f': [0b0001000, 0b0011100, 0b0101010, 0b0001000, 0b0001000],	// LEFTWARDS ARROW

	'\u0000': [0b0001000, 0b0001000, 0b1100010, 0b1011001, 0b1000110],	// -2
	'\u0001': [0b0001000, 0b0001000, 0b1000010, 0b1111111, 0b1000000],	// -1

	'\ufffd': [0b1111111, 0b1111101, 0b1010101, 0b1111011, 0b1111111],	// REPLACEMENT CHARACTER
});

// Makes SVG symbol strings from the font bitmaps.
const fontSymbols = Object.freeze(Object.keys(fontBits).map((key) => {
	const WIDTH = 85;
	const INTERVAL = 100;

	// Makes a symbol string.
	const svg = fontBits[key].reduce((str, bits, x) => {
		let newStr = '';
		for (let y = 0; y < 7; y++) {
			newStr += `<rect class="${((bits & (1 << y)) !== 0) ? 'lcd-on' : 'lcd-off'}" x="${INTERVAL * x}" y="${INTERVAL * y}" width="${WIDTH}" height="${WIDTH}" />`;
		}
		return str + newStr;
	}, `<symbol id="font-${key.codePointAt(0)}" viewBox="0 0 ${INTERVAL * 5} ${INTERVAL * 7}">`) + '</symbol>';

	return svg;
}, {}));

// Makes SVG symbol strings for cursor.
const cursorSymbols = Object.freeze([...new Array(2)].map((_, i) => {
	const WIDTH = 85;
	const INTERVAL = 100;

	// Makes a symbol string.
	let newStr = '';
	for (let x = 0; x < 5; x++) {
		newStr += `<rect class="${(i !== 0) ? 'lcd-on' : 'lcd-off'}" x="${INTERVAL * x}" y="0" width="${WIDTH}" height="${WIDTH}" />`;
	}

	return `<symbol id="cursor-${i}" viewBox="0 0 ${INTERVAL * 5} ${INTERVAL}">${newStr}</symbol>`;
}));

// Makes an SVG string of the letters.
const letters = Object.freeze([...new Array(CHAR_NUM)].map((_, i) => {
	const col = i % CHAR_COL;
	const row = Math.trunc(i / CHAR_COL);
	const x = LCD_PADDING_X + (FONT_WIDTH  + FONT_GAP)  * col;
	const y = LCD_PADDING_Y + (FONT_HEIGHT + LCD_GAP_Y) * row;

	return `<use id="letter-${i}" class="letter" xlink:href="#font-32" x="${x}" y="${y}" width="${FONT_WIDTH}" height="${FONT_HEIGHT}"></use>`;
}));

// Makes an SVG string of the cursors.
const cursors = Object.freeze([...new Array(CHAR_NUM)].map((_, i) => {
	const col = i % CHAR_COL;
	const row = Math.trunc(i / CHAR_COL);
	const x = LCD_PADDING_X + (FONT_WIDTH  + FONT_GAP)  * col;
	const y = LCD_PADDING_Y + (FONT_HEIGHT + LCD_GAP_Y) * row + FONT_HEIGHT;

	return `<use id="cursors-${i}" class="cursors" xlink:href="#cursor-0" x="${x}" y="${y}" width="${FONT_WIDTH}" height="${FONT_GAP}"></use>`;
}));

// Makes an SVG as a template. (it doesn't mean "<template /> element")
const elemSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
elemSvg.setAttribute('viewBox', `0 0 ${LCD_WIDTH} ${LCD_HEIGHT}`);
elemSvg.innerHTML = `
<style type="text/css" class="host-css">
:host {
	display: block;
	line-height: 0;
}
</style>
<style type="text/css">
svg {
	box-shadow: 0 0 10vw 0 rgba(0, 0, 0, 0.5) inset;
	border-style: inset;
	border-width: 0;
	user-select: none;
}

.lcd-on {
	opacity: 0.75;
}
.lcd-off {
	opacity: 0.125;
}
</style>

${fontSymbols.join('\n')}
${cursorSymbols.join('\n')}
<g fill="currentColor">
	${letters.join('')}
</g>
<g fill="currentColor">
	${cursors.join('')}
</g>`;

const hasGlyph = (() => {
	const chars = Object.keys(fontBits);
	return (ch) => chars.includes(ch);
})();

const PROP_TEXT      = 'text';
const PROP_CURSORPOS = 'cursorPos';
const attr2Props = Object.freeze([PROP_TEXT, PROP_CURSORPOS].reduce((p, c) => {
	p[c.toLowerCase()] = c;
	return p;
}, {}));

export class ProteusLcd extends HTMLElement {
	constructor() {
		super();

		// Initializes the member arguments.
		this._elemSvg = elemSvg.cloneNode(true);
		this._dirtyFlags = new Set();
		this._timerId = 0;
		this._isCursorTurnedOn = false;

		// Defines the properties.
		Object.defineProperty(this, PROP_TEXT, {
			get() {
				return this.getAttribute(PROP_TEXT);
			},
			set(val) {
				if (typeof val !== 'string') {
					console.warn('Invalid value');
					return;
				}
				this.setAttribute(PROP_TEXT, val);
				this._setDirtyFlag(PROP_TEXT);
			},
		});
		Object.defineProperty(this, PROP_CURSORPOS, {
			get() {
				return this.getAttribute(PROP_CURSORPOS);
			},
			set(val) {
				if (typeof val !== 'string' && typeof val !== 'number') {
					console.warn('Invalid value');
					return;
				}
				this.setAttribute(PROP_CURSORPOS, val);
				this._setDirtyFlag(PROP_CURSORPOS);

				if (this._timerId !== 0) {
					this._isCursorTurnedOn = false;
					clearInterval(this._timerId);
				}
				const cursorPos = Number(val);
				if (0 <= cursorPos && cursorPos < CHAR_NUM) {
					this._isCursorTurnedOn = true;
					this._timerId = setInterval(() => {
						this._isCursorTurnedOn = !this._isCursorTurnedOn;
						this._setDirtyFlag(PROP_CURSORPOS);
					}, 250);
				}
			},
		});

		// Creates and attaches the shadow root.
		this._shadowRoot = this.attachShadow({mode: 'open'});
		this._shadowRoot.append(this._elemSvg);
	}

	attributeChangedCallback(attr, oldVal, newVal) {
		// Updates the attribute if necessary.
		if (oldVal !== newVal) {
			this[attr2Props[attr]] = newVal;
		}
	}

	static get observedAttributes() {
		return Object.keys(attr2Props);
	}

	saveAsSvg() {
		const blob = new Blob([(new XMLSerializer()).serializeToString(this._makeStyledSvg())], {type: 'text/xml'});
		return blob;
	}

	saveAsPng(width, height, mimeType) {
		return new Promise((resolve) => {
			width  = this.offsetWidth;
			height = this.offsetHeight;

			// Creates an image element including a duplicated SVG.
			const elemImg = new Image();
			elemImg.src = `data:image/svg+xml;utf8,${encodeURIComponent((new XMLSerializer()).serializeToString(this._makeStyledSvg()))}`;
			elemImg.addEventListener('load', () => {
				// Creates a canvas which has same image size.
				const elemCanvas = document.createElement('canvas');
				elemCanvas.width  = width;
				elemCanvas.height = height;

				// Draws the image and save the canvas as a blob.
				const ctx = elemCanvas.getContext('2d');
				ctx.drawImage(elemImg, 0, 0, width, height);
				elemCanvas.toBlob((blob) => resolve(blob), mimeType);
			}, false);
		});
	}

	_makeStyledSvg() {
		// Clones the current SVG element.
		const elemSvgCopy = this._elemSvg.cloneNode(true);
		elemSvgCopy.setAttribute('width',  LCD_WIDTH);
		elemSvgCopy.setAttribute('height', LCD_HEIGHT);

		// Removes the style for host.
		[...elemSvgCopy.getElementsByClassName('host-css')].forEach((e) => e.remove());

		// Gets the computed style of the current element.
		const styles = getComputedStyle(this);
		const cssLines = [
			'color',
			'background-color',
			'border-width',
			'border-style',
			'border-color',
		].filter((key) => styles.getPropertyValue(key)).map((key) => `${key}: ${styles.getPropertyValue(key)};`);

		// Creates a style element.
		const elemStyle = document.createElementNS('http://www.w3.org/2000/svg', 'style');
		elemStyle.setAttribute('type', 'text/css');
		elemStyle.innerHTML = `\nsvg {\n\t${cssLines.join('\n\t')}\n}\n`;

		// Adds the new style.
		elemSvgCopy.prepend(elemStyle);

		return elemSvgCopy;
	}

	_setDirtyFlag(key) {
		// If it is the first time of setting dirty flag, requests the update at the next repaint.
		if (this._dirtyFlags.size === 0) {
			requestAnimationFrame(this._updateLcd.bind(this));
		}
		this._dirtyFlags.add(key);
	}

	_updateLcd() {
		console.assert(this._dirtyFlags.size > 0, '_updateLcd is called although the dirty flags have not been set.');

		// Updates each part.
		this._dirtyFlags.forEach((key) => {
			const attr = this.getAttribute(key);
			switch (key) {
			case PROP_TEXT:
				{
					const str = attr.split('\n').map((line) => line.padEnd(CHAR_COL, ' ')).slice(0, CHAR_ROW).join('').padEnd(CHAR_NUM, ' ');	// TODO
					console.assert(str.length === CHAR_NUM);
					str.split('').forEach((ch, i) => {
						const elem = this._elemSvg.getElementById(`letter-${i}`);
						const code = ((hasGlyph(ch)) ? ch : '\ufffd').charCodeAt(0);
						elem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `#font-${code}`);
					});
				}
				break;

			case PROP_CURSORPOS:
				{
					const cursorPos = Number(attr);
					for (let i = 0; i < CHAR_NUM; i++) {
						const elem = this._elemSvg.getElementById(`cursors-${i}`);
						elem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `#cursor-${(this._isCursorTurnedOn && i === cursorPos) ? 1 : 0}`);
					}
				}
				break;

			default:
				console.assert(false);
				break;
			}
		});

		this._dirtyFlags.clear();
	}
}

customElements.define('proteus-lcd', ProteusLcd);
