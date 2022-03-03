E-mu Sound Engine Virtual Front Panel
=====================================

https://shingo45endo.github.io/sound-engine-front-panel/


What is this?
-------------

This application can control your E-mu Sound Engine via Web as if it has Proteus-like LCD and switches.

E-mu Sound Engine is a minor MIDI sound module released in 1993. This sound module is General MIDI (GM) compliant and its sounds consist of the samples excerpted from E-mu Proteus series.

Even though the sound module has no LCD and switches to monitor/manipulate its sound, internally, it has a complete menu program like Proteus series. And the sound module supports the following SysExs: 

| Command                  | SysEx                               | Comments |
| ------------------------ | ----------------------------------- | -------- |
| Front Panel Data Request | `F0 18 04 00 17 F7`                 | - |
| Front Panel Data         | `F0 18 04 00 18 aa ... aa cc ll F7` | `aa`: 32 ASCII characters, `cc`: cursor position, `ll`: LED status |
| Switch Press             | `F0 18 04 00 19 0s F7`              | `s`: switch number |

This application can control E-mu sound Engine just like Proteus series. It has a virtual LCD to display the current front panel string data and also has virtual switches to send user's requests. And it sends/receives those SysEx commands internally via both MIDI In/Out to communicate to the sound module.


Prerequisites
-------------

You need the following hardware devices:

* E-mu Sound Engine
* MIDI interface


How to Use
----------

1. Plug both MIDI In/Out of a MIDI interface to E-mu Sound Engine.
2. Choose both MIDI In/Out devices on the top-right of the screen.
3. After the connection to Sound Engine is confirmed, the LCD on the screen displays the menu program of Sound Engine.
4. You can:
	* Manipulate Sound Engine with switches on the screen.
		* Master, Edit, Enter, Cursor buttons, and Data dial.
	* Play sounds with a virtual keyboard on the screen.


Key Assignment
--------------

	   C# D#    F# G# A#     (Upper)
	  [2][3]   [5][6][7]
	 C  D  E  F  G  A  B  C
	[Q][W][E][R][T][Y][U][I]
	--------------------------------
	     C# D#   F# G# A#    (Lower)
	    [S][D]  [G][H][J]
	   C  D  E  F  G  A  B  C
	  [Z][X][C][V][B][N][M][,]


TODO
----

* Confirm whether Creative Wave Blaster (CT1900) supports the SysExs as mentioned above and can be controlled by this application.
	* It is said that E-mu Sound Engine is very similar to Creative Wave Blaster. Internally, Sound Engine has a daughter board with Wave Blaster-like 26-pin connector.


License
-------

MIT


Author
------

[shingo45endo](https://github.com/shingo45endo)
