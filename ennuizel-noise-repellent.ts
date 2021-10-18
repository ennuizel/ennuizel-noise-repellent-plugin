/*
 * Copyright (c) 2021 Yahweasel
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 * SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
 * OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
 * CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

/// <reference path="../ennuizel.d.ts" />

const licenseInfo = `
This software is compiled from several sources, the licenses for which are
included herein. The complete source code is available at
https://ecastr.com/src/ .

---

noise-repellent and fftw3:

Copyright 2016 Luciano Dato <lucianodato@gmail.com>
Copyright (c) 2003, 2007-14 Matteo Frigo
Copyright (c) 2003, 2007-14 Massachusetts Institute of Technology

                   GNU LESSER GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.


  This version of the GNU Lesser General Public License incorporates
the terms and conditions of version 3 of the GNU General Public
License, supplemented by the additional permissions listed below.

  0. Additional Definitions.

  As used herein, "this License" refers to version 3 of the GNU Lesser
General Public License, and the "GNU GPL" refers to version 3 of the GNU
General Public License.

  "The Library" refers to a covered work governed by this License,
other than an Application or a Combined Work as defined below.

  An "Application" is any work that makes use of an interface provided
by the Library, but which is not otherwise based on the Library.
Defining a subclass of a class defined by the Library is deemed a mode
of using an interface provided by the Library.

  A "Combined Work" is a work produced by combining or linking an
Application with the Library.  The particular version of the Library
with which the Combined Work was made is also called the "Linked
Version".

  The "Minimal Corresponding Source" for a Combined Work means the
Corresponding Source for the Combined Work, excluding any source code
for portions of the Combined Work that, considered in isolation, are
based on the Application, and not on the Linked Version.

  The "Corresponding Application Code" for a Combined Work means the
object code and/or source code for the Application, including any data
and utility programs needed for reproducing the Combined Work from the
Application, but excluding the System Libraries of the Combined Work.

  1. Exception to Section 3 of the GNU GPL.

  You may convey a covered work under sections 3 and 4 of this License
without being bound by section 3 of the GNU GPL.

  2. Conveying Modified Versions.

  If you modify a copy of the Library, and, in your modifications, a
facility refers to a function or data to be supplied by an Application
that uses the facility (other than as an argument passed when the
facility is invoked), then you may convey a copy of the modified
version:

   a) under this License, provided that you make a good faith effort to
   ensure that, in the event an Application does not supply the
   function or data, the facility still operates, and performs
   whatever part of its purpose remains meaningful, or

   b) under the GNU GPL, with none of the additional permissions of
   this License applicable to that copy.

  3. Object Code Incorporating Material from Library Header Files.

  The object code form of an Application may incorporate material from
a header file that is part of the Library.  You may convey such object
code under terms of your choice, provided that, if the incorporated
material is not limited to numerical parameters, data structure
layouts and accessors, or small macros, inline functions and templates
(ten or fewer lines in length), you do both of the following:

   a) Give prominent notice with each copy of the object code that the
   Library is used in it and that the Library and its use are
   covered by this License.

   b) Accompany the object code with a copy of the GNU GPL and this license
   document.

  4. Combined Works.

  You may convey a Combined Work under terms of your choice that,
taken together, effectively do not restrict modification of the
portions of the Library contained in the Combined Work and reverse
engineering for debugging such modifications, if you also do each of
the following:

   a) Give prominent notice with each copy of the Combined Work that
   the Library is used in it and that the Library and its use are
   covered by this License.

   b) Accompany the Combined Work with a copy of the GNU GPL and this license
   document.

   c) For a Combined Work that displays copyright notices during
   execution, include the copyright notice for the Library among
   these notices, as well as a reference directing the user to the
   copies of the GNU GPL and this license document.

   d) Do one of the following:

       0) Convey the Minimal Corresponding Source under the terms of this
       License, and the Corresponding Application Code in a form
       suitable for, and under terms that permit, the user to
       recombine or relink the Application with a modified version of
       the Linked Version to produce a modified Combined Work, in the
       manner specified by section 6 of the GNU GPL for conveying
       Corresponding Source.

       1) Use a suitable shared library mechanism for linking with the
       Library.  A suitable mechanism is one that (a) uses at run time
       a copy of the Library already present on the user's computer
       system, and (b) will operate properly with a modified version
       of the Library that is interface-compatible with the Linked
       Version.

   e) Provide Installation Information, but only if you would otherwise
   be required to provide such information under section 6 of the
   GNU GPL, and only to the extent that such information is
   necessary to install and execute a modified version of the
   Combined Work produced by recombining or relinking the
   Application with a modified version of the Linked Version. (If
   you use option 4d0, the Installation Information must accompany
   the Minimal Corresponding Source and Corresponding Application
   Code. If you use option 4d1, you must provide the Installation
   Information in the manner specified by section 6 of the GNU GPL
   for conveying Corresponding Source.)

  5. Combined Libraries.

  You may place library facilities that are a work based on the
Library side by side in a single library together with other library
facilities that are not Applications and are not covered by this
License, and convey such a combined library under terms of your
choice, if you do both of the following:

   a) Accompany the combined library with a copy of the same work based
   on the Library, uncombined with any other library facilities,
   conveyed under the terms of this License.

   b) Give prominent notice with the combined library that part of it
   is a work based on the Library, and explaining where to find the
   accompanying uncombined form of the same work.

  6. Revised Versions of the GNU Lesser General Public License.

  The Free Software Foundation may publish revised and/or new versions
of the GNU Lesser General Public License from time to time. Such new
versions will be similar in spirit to the present version, but may
differ in detail to address new problems or concerns.

  Each version is given a distinguishing version number. If the
Library as you received it specifies that a certain numbered version
of the GNU Lesser General Public License "or any later version"
applies to it, you have the option of following the terms and
conditions either of that published version or of any later version
published by the Free Software Foundation. If the Library as you
received it does not specify a version number of the GNU Lesser
General Public License, you may choose any version of the GNU Lesser
General Public License ever published by the Free Software Foundation.

  If the Library as you received it specifies that a proxy can decide
whether future versions of the GNU Lesser General Public License shall
apply, that proxy's public statement of acceptance of any version is
permanent authorization for you to choose that version for the
Library.


---

emscripten and musl:

Copyright (c) 2010-2014 Emscripten authors, see AUTHORS file.
Copyright © 2005-2014 Rich Felker, et al.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
`;

// extern
declare let LibAV: any, NoiseRepellent: any;

// The plugin info
const plugin: ennuizel.Plugin = {
    name: "Noise Repellent",
    id: "noise-repellent",
    infoURL: "https://github.com/ennuizel/ennuizel-noise-repellent-plugin",
    description: 'This plugin adds support for the <a href="https://github.com/Yahweasel/noise-repellent.js">noise-repellent.js</a> noise reducer.',
    licenseInfo,
    load,
    api: {
        noiseRepellent
    }
};

// Register the plugin
Ennuizel.registerPlugin(plugin);

// Our array of noise repellent instances
const nrInstances: any[] = [];

/**
 * Noise Repellent options.
 */
const NoiseRepellentOptions = [
    {
        name: "Reduction _amount",
        id: "AMOUNT",
        min: 0,
        max: 48,
        value: 10
    },
    {
        name: "_Thresholds offset",
        id: "NOFFSET",
        min: -12,
        max: 12,
        value: 0
    },
    {
        name: "_Release",
        id: "RELEASE",
        min: 1,
        max: 10,
        value: 5
    },
    {
        name: "_Masking",
        id: "MASKING",
        min: 1,
        max: 10,
        value: 5
    },
    {
        name: "_Protect transients",
        id: "T_PROTECT",
        min: 1,
        max: 6,
        value: 1
    },
    {
        name: "Residual _whitening",
        id: "WHITENING",
        min: 0,
        max: 100,
        value: 0
    }
];

/**
 * Load the plugin.
 */
async function load() {
    // Figure out where to load noise-repellent.js
    const nrURL = new URL(plugin.url);
    const base = nrURL.pathname.replace(/\/[^\/]*$/, "");
    nrURL.pathname = base;
    NoiseRepellent = {base: nrURL.toString()};
    nrURL.pathname = base + "/noise-repellent-m.js";

    // Load it
    await Ennuizel.ui.loadLibrary(nrURL.toString());

    // And register the filter
    Ennuizel.filters.registerCustomFilter({
        name: "Noise _Repellent",
        filter: uiNoiseRepellent
    });
}

/**
 * User interface to the noise repellent filter.
 * @param d  Dialog to show filter options.
 */
async function uiNoiseRepellent(d: ennuizel.ui.Dialog) {
    await Ennuizel.ui.dialog(async function (d, show) {
        const pels: Record<string, HTMLInputElement> = Object.create(null);
        let first: HTMLElement = null;

        for (const opt of NoiseRepellentOptions) {
            // Make the UI
            const id = "noise-repellent-" + opt.id;
            const div = Ennuizel.ui.mk("div", d.box, {className: "row"});
            Ennuizel.hotkeys.mk(d, opt.name + ":&nbsp;",
                lbl => Ennuizel.ui.lbl(div, id, lbl, {className: "ez"}));
            const inp = pels[opt.id] = Ennuizel.ui.mk("input", div, {
                id,
                type: (typeof opt.value === "boolean") ? "checkbox" : "text"
            });
            if (!first)
                first = inp;

            // Set the default values
            if (typeof opt.value === "boolean") {
                inp.checked = opt.value;

            } else {
                inp.value = opt.value + "";

                inp.onchange = () => {
                    const val = +inp.value;
                    if (val < opt.min)
                        inp.value = opt.min + "";
                    else if (val > opt.max)
                        inp.value = opt.max + "";
                };
            }
        }

        // The filter button itself
        const btn = Ennuizel.hotkeys.btn(d, "_Filter", {className: "row"});
        btn.onclick = () => {
            Ennuizel.ui.loading(async function(d) {
                let opts: Record<string, number> = Object.create(null);
                for (const key in pels) {
                    const el = pels[key];
                    if (el.type === "checkbox")
                        opts[key] = +el.checked;
                    else
                        opts[key] = +el.value;
                }

                await noiseRepellent(opts, Ennuizel.select.getSelection(), d);
            }, {
                reuse: d
            });
        };

        show(first);
    }, {
        closeable: true,
        reuse: d
    });
}

/**
 * Noise repellent filter implementation.
 * @param opts  Noise repellent options.
 * @param sel  Selection to filter.
 * @param d  Dialog to show progress.
 */
async function noiseRepellent(
    opts: Record<string, number>, sel: ennuizel.select.Selection,
    d: ennuizel.ui.Dialog
) {
    // Get the audio tracks
    const tracks = <ennuizel.track.AudioTrack[]>
        sel.tracks.filter(x => x.type() === Ennuizel.TrackType.Audio);

    if (tracks.length === 0)
        return;

    if (d)
        d.box.innerHTML = "Filtering...";

    // Make the stream options
    const streamOpts = {
        start: sel.range ? sel.start : void 0,
        end: sel.range ? sel.end : void 0
    };

    // Make the status
    const status = tracks.map(x => ({
        name: x.name,
        filtered: 0,
        duration: x.sampleCount()
    }));

    // Function to show the current status
    function showStatus() {
        if (d) {
            const statusStr = status.map(x =>
                x.name + ": " + Math.round(x.filtered / x.duration * 100) + "%")
            .join("<br/>");
            d.box.innerHTML = "Filtering...<br/>" + statusStr;
        }
    }

    // The filtering function for each track
    async function filterThread(track: ennuizel.track.AudioTrack, idx: number) {
        // Make one NoiseRepellent instance per channel
        const nrs: any[] = [];
        for (let i = 0; i < track.channels; i++)
            nrs.push(await NoiseRepellent.NoiseRepellent(track.sampleRate));

        // Initialize them
        for (const nr of nrs) {
            for (const opt of NoiseRepellentOptions) {
                if (opt.id in opts)
                    nr.set(NoiseRepellent[opt.id], opts[opt.id]);
                else
                    nr.set(NoiseRepellent[opt.id], opt.value);
            }
            nr.set(NoiseRepellent.N_ADAPTIVE, 1);
            nr.set(NoiseRepellent.ENABLE, 1);
        }

        // Figure out the latency
        nrs[0].run(new Float32Array(track.sampleRate));
        const latency: number = nrs[0].latency;

        // Make a libav instance
        const libav = await LibAV.LibAV();

        // We need two filters: one to convert to FLTP, and one to convert back.
        const channelLayout = (track.channels === 1) ? 4 : ((1<<track.channels)-1);
        const frame = await libav.av_frame_alloc();
        const [, src1, sink1] =
            await libav.ff_init_filter_graph("apad=pad_len=" + latency, {
                sample_rate: track.sampleRate,
                sample_fmt: track.format,
                channel_layout: channelLayout
            }, {
                sample_rate: track.sampleRate,
                sample_fmt: Ennuizel.LibAVSampleFormat.FLTP,
                channel_layout: channelLayout
            });
        const [, src2, sink2] =
            await libav.ff_init_filter_graph("atrim=start_pts=" + latency, {
                sample_rate: track.sampleRate,
                sample_fmt: Ennuizel.LibAVSampleFormat.FLTP,
                channel_layout: channelLayout,
            }, {
                sample_rate: track.sampleRate,
                sample_fmt: track.format,
                channel_layout: channelLayout
            });

        // Input stream
        const inStream = track.stream(Object.assign({keepOpen: true}, streamOpts)).getReader();

        // Filter stream
        const filterStream = new Ennuizel.ReadableStream({
            async pull(controller) {
                while (true) {
                    // Get some data
                    const inp = await inStream.read();
                    if (inp.value)
                        inp.value.node = null;

                    // Convert it to FLTP
                    const fltp = await libav.ff_filter_multi(
                        src1, sink1, frame,
                        inp.done ? [] : [inp.value], inp.done);

                    // Noise reduction
                    for (const frame of fltp) {
                        for (let i = 0; i < track.channels; i++) {
                            // Split up to avoid OOM
                            const data = frame.data[i];
                            for (let j = 0; j < data.length; j += track.sampleRate) {
                                data.set(
                                    nrs[i].run(data.subarray(j, j + track.sampleRate)),
                                    j
                                );
                            }
                        }
                    }

                    // Convert it back
                    const outp = await libav.ff_filter_multi(
                        src2, sink2, frame,
                        fltp, inp.done);

                    // Update the status
                    if (inp.done)
                        status[idx].filtered = status[idx].duration;
                    else
                        status[idx].filtered += inp.value.data.length;
                    showStatus();

                    // Write it out
                    for (const part of outp)
                        controller.enqueue(part.data);

                    // Maybe end it
                    if (inp.done)
                        controller.close();

                    if (outp.length || inp.done)
                        break;
                }
            }
        });

        // Overwrite the track
        await track.overwrite(filterStream, Object.assign({closeTwice: true}, streamOpts));

        // And get rid of the libav instance
        libav.terminate();
    }

    // Number of threads to run at once
    const threads = navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 2;

    // Current state
    const running: Promise<unknown>[] = [];
    const toRun = tracks.map((x, idx) => <[ennuizel.track.AudioTrack, number]> [x, idx]);

    // Run
    while (toRun.length) {
        // Get the right number of threads running
        while (running.length < threads && toRun.length) {
            const [sel, idx] = toRun.shift();
            running.push(filterThread(sel, idx));
        }

        // Wait for one to finish to make room for more
        const fin = await Promise.race(running.map((x, idx) => x.then(() => idx)));
        running.splice(fin, 1);
    }

    // Wait for them all to finish
    await Promise.all(running);
}
