import type { L } from "./profile";

export type Block =
  | { type: "p"; text: L }
  | { type: "h"; text: L }
  | { type: "code"; lang: string; code: string }
  | { type: "list"; items: L[] };

export interface Post {
  slug: string;
  date: string; // ISO
  readMin: number;
  tags: string[];
  title: L;
  excerpt: L;
  body: Block[];
}

const posts: Post[] = [
  {
    slug: "compose-multiplatform-share-ui",
    date: "2026-11-10",
    readMin: 5,
    tags: ["KMP", "Compose"],
    title: {
      vi: "Chia sẻ UI giữa Android và iOS với Compose Multiplatform",
      en: "Sharing UI between Android and iOS with Compose Multiplatform",
    },
    excerpt: {
      vi: "Mình chia code thế nào giữa commonMain, androidMain và iosMain, và chỗ nào vẫn nên viết native.",
      en: "How I split code across commonMain, androidMain and iosMain — and where native code still wins.",
    },
    body: [
      {
        type: "p",
        text: {
          vi: "Compose Multiplatform cho phép viết một lần UI bằng Compose và chạy trên cả Android lẫn iOS. Với app cá nhân, đây là cách nhanh nhất để giữ hai nền tảng cùng tính năng.",
          en: "Compose Multiplatform lets you write the UI once in Compose and run it on both Android and iOS. For side projects it's the fastest way to keep two platforms at feature parity.",
        },
      },
      { type: "h", text: { vi: "Chia module", en: "Splitting modules" } },
      {
        type: "list",
        items: [
          { vi: "commonMain: domain, repository, ViewModel và màn hình Compose.", en: "commonMain: domain, repositories, ViewModels and Compose screens." },
          { vi: "androidMain / iosMain: player, quyền hệ thống, in-app purchase.", en: "androidMain / iosMain: the player, system permissions, in-app purchases." },
          { vi: "expect/actual chỉ cho những API thật sự khác nhau.", en: "expect/actual only for APIs that truly differ." },
        ],
      },
      {
        type: "code",
        lang: "kotlin",
        code: `// commonMain
expect class AudioPlayer() {
    fun play(url: String)
    fun pause()
}

// androidMain → Media3, iosMain → AVPlayer
@Composable
fun PlayerBar(player: AudioPlayer, url: String) {
    Button(onClick = { player.play(url) }) { Text("Play") }
}`,
      },
      { type: "h", text: { vi: "Khi nào vẫn viết native", en: "When to stay native" } },
      {
        type: "p",
        text: {
          vi: "Những màn hình phụ thuộc nặng vào hệ thống — phát media nền, widget, Live Activity — mình vẫn viết native rồi gọi qua interface chung. Phần còn lại chia sẻ được khoảng 80% code.",
          en: "Screens that lean heavily on the OS — background media, widgets, Live Activities — stay native behind a shared interface. Everything else shares roughly 80% of the code.",
        },
      },
    ],
  },
  {
    slug: "android-tv-focus-dpad",
    date: "2026-10-02",
    readMin: 4,
    tags: ["Android TV", "Compose"],
    title: {
      vi: "Làm launcher Android TV: bài học về focus và D-pad",
      en: "Building an Android TV launcher: lessons on focus and the D-pad",
    },
    excerpt: {
      vi: "Trên TV không có ngón tay — mọi thứ xoay quanh focus. Vài kỹ thuật mình dùng trong TS Launcher TV.",
      en: "There are no fingers on a TV — everything revolves around focus. A few techniques from TS Launcher TV.",
    },
    body: [
      {
        type: "p",
        text: {
          vi: "Khi làm TS Launcher TV, phần tốn thời gian nhất không phải là vẽ UI mà là làm cho focus đi đúng chỗ khi người dùng bấm lên, xuống, trái, phải trên remote.",
          en: "While building TS Launcher TV, the most time-consuming part wasn't drawing the UI but making focus land in the right place when the user presses up, down, left and right on the remote.",
        },
      },
      { type: "h", text: { vi: "Nhớ vị trí focus theo hàng", en: "Remember focus per row" } },
      {
        type: "p",
        text: {
          vi: "Mỗi hàng app giữ lại item đang focus, để khi người dùng đi xuống rồi quay lên, focus trở về đúng app cũ thay vì nhảy về đầu hàng.",
          en: "Each app row keeps its focused item, so moving down and back up returns focus to the same app instead of jumping to the start of the row.",
        },
      },
      {
        type: "code",
        lang: "kotlin",
        code: `val requester = remember { FocusRequester() }
LazyRow(
    modifier = Modifier
        .focusRestorer { requester }
) {
    itemsIndexed(apps) { i, app ->
        AppCard(app, Modifier.then(
            if (i == 0) Modifier.focusRequester(requester) else Modifier
        ))
    }
}`,
      },
      { type: "h", text: { vi: "Hiệu ứng nhẹ, phản hồi nhanh", en: "Light effects, instant feedback" } },
      {
        type: "p",
        text: {
          vi: "TV box thường yếu, nên mình chỉ scale và đổi viền khi focus, tránh blur và shadow lớn. Cảm giác nhanh quan trọng hơn hiệu ứng đẹp.",
          en: "TV boxes are often underpowered, so focus only scales and changes the border — no blur, no heavy shadows. Feeling fast matters more than looking fancy.",
        },
      },
    ],
  },
  {
    slug: "iptv-m3u-parser",
    date: "2026-08-21",
    readMin: 4,
    tags: ["Media3", "IPTV"],
    title: {
      vi: "Phân tích playlist M3U cho app IPTV",
      en: "Parsing M3U playlists for an IPTV app",
    },
    excerpt: {
      vi: "Playlist M3U ngoài đời rất lộn xộn. Cách mình viết parser chịu lỗi cho TS IPTV.",
      en: "Real-world M3U playlists are messy. How I wrote a fault-tolerant parser for TS IPTV.",
    },
    body: [
      {
        type: "p",
        text: {
          vi: "Định dạng M3U trông đơn giản: mỗi kênh là một dòng #EXTINF và một dòng URL. Nhưng playlist người dùng nhập vào thường thiếu thuộc tính, sai encoding hoặc có dòng thừa.",
          en: "M3U looks simple: each channel is an #EXTINF line followed by a URL. But user playlists often miss attributes, use the wrong encoding or contain stray lines.",
        },
      },
      {
        type: "code",
        lang: "kotlin",
        code: `private val attr = Regex("""([\\w-]+)="([^"]*)"""")

fun parse(lines: Sequence<String>): List<Channel> {
    val out = mutableListOf<Channel>()
    var info: String? = null
    for (raw in lines) {
        val line = raw.trim()
        when {
            line.startsWith("#EXTINF") -> info = line
            line.isEmpty() || line.startsWith("#") -> Unit
            else -> {
                val attrs = info?.let { attr.findAll(it) }
                    ?.associate { it.groupValues[1] to it.groupValues[2] }.orEmpty()
                out += Channel(
                    name = info?.substringAfterLast(",")?.trim().orEmpty(),
                    group = attrs["group-title"],
                    logo = attrs["tvg-logo"],
                    url = line,
                )
                info = null
            }
        }
    }
    return out
}`,
      },
      {
        type: "p",
        text: {
          vi: "Parser đọc theo Sequence nên playlist vài chục nghìn kênh vẫn không tốn bộ nhớ, và dòng hỏng chỉ bị bỏ qua thay vì làm hỏng cả playlist.",
          en: "Reading as a Sequence keeps memory flat even for playlists with tens of thousands of channels, and a broken line is skipped instead of failing the whole playlist.",
        },
      },
    ],
  },
];

export default posts;
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
