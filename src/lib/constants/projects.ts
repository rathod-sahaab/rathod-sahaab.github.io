import elideGif from "$lib/assets/images/projects/elide-app.gif";
import commandPalettePng from "$lib/assets/images/projects/command-palette.png";
import dartBoardPng from "$lib/assets/images/projects/dart-board.png";
import qrcoderGif from "$lib/assets/images/projects/qrcoder.gif";
import type { ITechnologyTag } from "./technologies";

export const PROJECTS: {
  title: string,
  description: string,
  link: string,
  tagIds: readonly ITechnologyTag[]
  priority: number,
  alt: string,
  image: string,
}[] = [
    {
      title: 'elide.in: A webapp to make your URLs catchy and easy.',
      description:
        'The app helps you simplify your urls by letting you decide what they are so you can use relatable urls instead of some gibberish.',
      link: 'https://console.elide.in',
      tagIds: ['frontend', 'backend', 'rust', 'react', 'ts'],
      priority: 100,
      alt: 'Command Palete screen shot',
      image: elideGif,
    },
    {
      title: 'QRCoder: A simple app to generate QR codes',
      description:
        'Just enter the text, email, hyperlink etc. select error correction level, choose the color and boom you have a QR.',
      link: 'https://abhay.rs/qrcoder',
      tagIds: ['frontend', 'react', 'js'],
      priority: 200,
      alt: 'Command Palete screen shot',
      image: qrcoderGif,
    },
    {
      title: 'Command Palette: feature that made using Inkscape super fast',
      description:
        "Typing to do things is way faster than using a mouse, command palette is a feature that provides you just that -- A very smart box to type commands into -- and execute them before you could've even touched your mouse.",
      link: 'https://dev.to/rathod_sahaab/inkscape-command-palette-merged-15c2',
      tagIds: ['cpp', 'gtkmm'],
      alt: 'Command Palete screen shot',
      priority: 101,
      image: commandPalettePng,
    },
    {
      title: 'Dart Board: A file server written in dart',
      description:
        "A server that you can point to a folder and it will list it's contents for you, then click on a file to download it over HTTP. A project written in 3 days to learn about HTTP on lower level with pretty low level framework 'Shelf' using dart.",
      link: 'https://github.com/rathod-sahaab/dart_board',
      tagIds: ['dart', 'frontend', 'backend', 'pug'],
      alt: 'Dart board screen shots',
      priority: 199,
      image: dartBoardPng,
    },
  ]

type ITechnologyProjectCount = { [K in ITechnologyTag]: number }

export const TAG_PROJECTS_COUNT_MAP = PROJECTS.reduce<ITechnologyProjectCount>(
  (projectsAcc, project) => {
    const tags = new Set<ITechnologyTag>(project.tagIds)

    console.log({ projectsAcc, project })

    return [...tags].reduce(
      (tagsAcc, tag) => ({
        ...tagsAcc,
        [tag]: (tagsAcc[tag] ?? 0) + 1,
      }),
      projectsAcc,
    )
  },
  { all: PROJECTS.length } as ITechnologyProjectCount,
)

