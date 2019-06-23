# My ALC 4.0 NoteBook

A Birds-eye view of the ALC 4.0 Program [PluralSight](https://pluralsight.com) Content - [View The NoteBook](https://bankole2000.github.io/alc4.0strategy)

[![Practice](https://img.shields.io/badge/Learning-PluralSight-purple.svg)](https://bankole2000.github.io/alc4.0strategy)

_<p align="center">"Because all things must come to an end, let's cherish the memories while we live them"<br>- **Esan Bankole** (yes... My quote)</p>_

<div align="center" style="text-align:center; margin:auto;">
<img align="center" src="https://www.newvision.co.ug/w-images/b0b00621-7de0-4cdb-9659-985b4525dff1/1/ALC-703x422.jpg" width="200"/>
</div>

## What is This?

A simple personal record of all the learning material available on the **ALC** _(Andela Learning Community)_ **4.0** learning program. Built with [Bootstrap 4](https://getbootstrap.com/), [jQuery DataTables](), [moment.js]() and a bit of [Patience](https://simpleprogrammer.com/improve-your-patience-developer/)... (_quite_ a bit)..

### Features:

- List of **All PluralSight Channels** and **Paths** _currently_\* available (As at **Phase 1**) on the **3 Main Tracks** `Android`, `Mobile Web`, and `Google Cloud`
- List of **All Courses** Currently available on all the channels, tabulated in an orderly, searchable manner.
- Links to course resources - **Transcripts**, **Excercise Files**, and videos
  > Note: Videos are only accessible if you have a PluralSight account with the Google Scholarship on that specific track, or are subscribed to PluralSight.

## The BackStory - Why I made this

I was excited to learnt that I had been accepted as a Volunteer [Andela](https://andela.com) Learning Community Ambassador (LCA). But even more exciting, was that I had moved on to the next phase of the **Google + PluralSight + Andela** Scholarship program on **ALL 3 TRACKS** (Pretty exciting stuff yeah?).

But once I logged in to My PluralSight Library I _Immediately_ realized 3 things.

1. That everything (and I mean _**everything**_!) I'd ever want or need to learn as a software Engineer was more than well covered in the training materials - (I don't think I'll be needing youtube or Udemy anymore :smirk: )

2. The program is 9 months long (approximately), but the materials are worth a **lifetime** of careful study and practice, even _after_ the program. And

3. Being on **all 3 tracks**, I have the rare privilege of having access to materials from other tracks that a lot of other people don't have - But they'd probably also like to see.

## So What?

So, in order to **pace** Myself, and gear up for the long haul, I made this... thing (I guess)... with `transcripts` and direct links to all the channels, Paths, Courses, and Excercise files.

This was originally supposed to be a personal thing that I would use... But I felt it might be helpful to others as well...

I also recognized the possibility that I might not make it to Phase 2, so I built this just in case that happens, so I can continue learning. And anyone who doesn't make it to phase 2 can refer to this page as well.

> Also (Just a thought), when the Program ends, if I can afford it, I might stay subscribed to [PluralSight](https://pluralsight.com) so I can keep learning coz the materials are _that_ good.

## Features in Development

- Still Working on Adding Courses from the Different Learning Paths
- Need To use `LocalStorage` to persist checked state of **Done** courses in the various Courses Tables. (So that way users can easily mark their progress)
- Still Copying and linking the Transcripts from the Different Courses... ngl it might take a while >.<
- Notifications maybe? idk... Any Suggestions are welcome...

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
