# My ALC 4.0 NoteBook

A Birds-eye view of the ALC 4.0 Program [PluralSight](https://pluralsight.com) Content - [View The NoteBook](https://bankole2000.github.io/alc4.0strategy)

[![Practice](https://img.shields.io/badge/Learning-PluralSight-purple.svg)](https://bankole2000.github.io/alc4.0strategy)

_<p align="center">"Because all things must come to an end, let's cherish the memories while we live them"<br>- **Esan Bankole** (yes... My quote)</p>_

<div align="center" style="text-align:center; margin:auto;">
<img align="center" src="https://www.newvision.co.ug/w-images/b0b00621-7de0-4cdb-9659-985b4525dff1/1/ALC-703x422.jpg" width="200"/>
</div>

## What is This?

A simple personal record of all the learning material available on the **ALC** _(Andela Learning Community)_ **4.0** learning program. Built with [Bootstrap 4](https://getbootstrap.com/), [jQuery DataTables](), [moment.js](), [LocalStorage]() and a bit of [Patience](https://simpleprogrammer.com/improve-your-patience-developer/)... (_quite_ a bit)..

### Features:

- List of (and links to) **All PluralSight Channels** and **Paths** _currently_\* available (As at **Phase 1**) on the **3 Main Tracks** `Android`, `Mobile Web`, and `Google Cloud`
- Searchable List of **all Courses** on all the channels, tabulated in an orderly manner.
- Direct Links to **Every. Single. Course.** (you're welcome).
- Links to course resources - **Transcripts**, **Excercise Files** (still working on this).
- Keep Track of Completed courses by marking as **Done**
  > Note: Videos are only accessible if you have a PluralSight account with the Google Scholarship on that specific track, or are subscribed to PluralSight.

## BackStory - Why I made this

I was excited to learn that I had been accepted as a Volunteer [Andela](https://andela.com) Learning Community Ambassador (LCA). But even more exciting, was that I had moved on to the next phase of the **Google + PluralSight + Andela** Scholarship program on **ALL 3 TRACKS** (Pretty exciting stuff yeah?).

But once I logged in to My PluralSight Library I _Immediately_ realized 3 things.

1. That everything (and I mean _**everything**_!) I'd ever want or need to learn as a software Engineer was more than well covered in the training materials - (I don't think I'll be needing youtube anymore :smirk: )

2. The ALC program is only a few months long, but the materials are worth a **lifetime** of _careful study_ and _practice_, even _after_ the program. And

3. Being on **all 3 tracks**, I have the rare privilege of having access to materials from other tracks that a lot of other people don't have - But they'd probably also like to see.

And After listening to **Dan AppleMan**'s Course on _**"Learning Technology in the Information Age"**_, I knew I had to plan my approach carefully otherwise risk getting lost in it all.

## So What? 

So, in order to **pace** Myself and gear up for the long haul, I made this... with direct links to _all_ the Channels, Paths, Courses, Transcripts and Excercise files (still working on the last 2), **searchable** and **sortable** by title, Difficulty, tutor, Course Length etc...

Also, I found that the PluralSight website loads reeeeaaaally slow on my computer, and is difficult to navigate on the mobile app too, and I just wanted a light weight interface so I could quickly find where I wanted to go and keep track of what I've done so far.

This was originally supposed to be a personal thing that I would use... But I felt it might be helpful to others as well...

I also recognized the possibility that I might not make it to the next Phase (full time job, shitty computer/internet... there's lots of reasons), so I built this just in case that happens, so I can continue learning regardless. And anyone who doesn't make it to the next phase or whatever feel free to use this page as well.

> Also (Just a thought), when the Program ends, if I can afford it, I might stay subscribed to [PluralSight](https://pluralsight.com) so I can keep learning coz the materials are really, _really_ good.

## Features in Development

- [x] Adding Courses from the Different Learning Paths
- [x] Use `LocalStorage` to persist checked state of **Done** courses in the various Courses Tables. (So that way users can easily mark their progress)
- [ ] Links to Transcripts and Excercise Files for each course... it might take a while >.<
- [x] Notifications maybe? idk... Any Suggestions are welcome...

## Contribution

Contributions are highly welcome. Feel free to fork, clone, make pull requests, report issues etc.

### Some notes on the code

All course Data are hardcoded into Arrays of Arrays, each using a particular naming convention and then the Arrays are dynamically loaded to the dom using the `Datatables` library:

```javascript
// Array of courses on CLDLP1MT Channel (Cloud Learning Phase 1 Main Track Channel)
const CLDLP1MT = [["id1", "title1", ...etc], ["id2", "title2", ...etc]];

// Datatables library loading array to table with id
$("#cldlp1mt").DataTable({
  data: CLDLP1MT,
  columns: [
    { title: "ID" },
    { title: "Course Name" },
    { title: "Author" },
    { title: "Difficulty" },
    { title: "Release Date" },
    { title: "Length" },
    { title: "Exercise Files" },
    { title: "Transcript" },
    { title: "Link" },
    { title: "Status" }
  ]
});
```

> just a note

```
mws = mobilewebspecialist, cld = cloud, and = android`
```

## Acknowledgments

- Many thanks to [PluralSight](https://pluralsight.com) for their awesome courses - _i will not fail you sensei_
- Thanks to [Google](https://google.com) and [Andela](https://andela.com) for the partnership, and access to these things.
- And To anyone reading this... _You're awesome!_

That being said
_<p align="center">Adieu, Till I push again... I must return to my meditations on the Ways of Mobile Web, Android, and The Cloud</p>_
