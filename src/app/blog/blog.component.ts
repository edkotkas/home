import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() { }

  private entries = [{
      title: "Copy/Paste or Move?",
      date: "23st | October | 2016",
      content: "Weekend fun, enjoying some games and chinese food. Love the pork dim sum! I feel likes these posts are more like some short tweets. Last one was a longer one, but generally I have no clue on what to actually write about. It is nice to write my thinking down about the blog. I'm sure over time and a few hundred tiny posts, there will be a few with a few thousand words at least and maybe an actual proper topic.. Like AI or something cool in code, or even maybe how to actually transfer a person into an artificial environment. Movie's like Transcedence(or even Chappy) seem to just copy the brain waves and assimilate a version in digital form. This seems like a real way to do it, putting a human into a computer and all. This lacks in one major way, the original vessel dies(both Transcendence with Johnny Depp and Chappy with Slum Dog Millionaire). So it does work, the conscience does get transferred and the brain waves respond to the transfer by being confused on the location and difference in their form. This though, is not a real transfer. What if the host was still alive? Is the person now in the computer? Or what is actually happening? One way to see this, is that the person is now split in two. Fully the same until the point of the copying. So it works again, the brain waves are in the machine and \"alive\", but now we have two \"people\" at the same time. Not really what we wanted. Of course this is all hypothetical and not going to happen for a long while now, but it's fun to discuss. I will be betting that to actually transfer the brainwaves, it would require to actually physically manipulate the brain of the host to transfer it to an artificial vessel. This essentially kills the host, unless there's a way to keep the body alive so that we can later transfer the brain waves back to the body. In this scenario, we have transferred the electrical impulses into a container and successfully moved a physical part of the brain in a way that would not be a copy but the actual person itself. And here we go, we transferred a human into a machine. Now to actually do somethign useful, until next time!",
      extra: "Where did this AI thing come from?"
  }, {
      title: "Light up the Blog!",
      date: "21st | October | 2016",
      content: "A bit of lightening up to the blog, felt it was a bit too dark. So full light theme, makes me feel lighter. I guess websites seem better when they're bright and pop in your face. IDE's though, a completely different story, full black! Maybe not pitch black cause that just seems a bit too much again. There's never the proper shade of black on editors, I feel. When I find that perfect shade I'll post it up on one these entries as the background. When I originally wrote the first entry, I said that it would be easy keeping up the blog on an almost daily basis beacause of the simple JS for the entries... Well I was wrong, been lazy to write here. To make an actual update beside the small style change, I've got to actually made it into looking into some node applications. One of them \"Vetus\", authored by my work team leader and worked on by a few interns. It's meant to integrate git tracking for file based system. In my head this awfully seems like something you would drop into Mongo if you had the chance, but it's a great integration as far as I've seen. It's also quite interesting as a project, really interested how it works out. [l=(https://github.com/envman/vetus)]Here's a link to it[/l], for anyone who's interested. Until next time then!",
      extra: "PS, just added links parsing into the js, woot!"
  }, {
      title: "Portfolio Remake Part Two (Dev)",
      date: "15th | October | 2016",
      content: "Made quite a few changes to the previous layout of my portfolio, liking how it looks. I thought of just going for something simple which would display my knowledge straight to the person and explain a bit about myself while doing that. Hence the look is very subtle and only displays relevant info about me.",
      extra: "Looking good so far."
  },{
      title: "Portfolio Remake Part One (Dev)",
      date: "13th | October | 2016",
      content: "I decided to remake my portfolio page since I made this blog page from scratch. Thought I'd do the same to my portfolio page. The bigger picture is to make a bunch of smaller projects and then have a main website as a hub for these. At least that's the plan.",
      extra: "[i]http://i.imgur.com/IEMwA3Z.jpg[/i]"
  }, {
      title: "Day One (Dev)",
      date: "9th | October | 2016",
      content: "Day one of actually writing to my blog. I will try to write one piece per day and see how things go along. Adding new entries is simple with the js, so it wouldn't be too much of a hassle to keep writing. Hopefully this page will improve and get very long by the end of this year.",
      extra: "[i]http://i.imgur.com/fAPpn.jpg[/i]"
  }]

  private entriesFormatted: boolean = false

  ngOnInit() {
    for(let entry of this.entries) {
      let imageRegex = /\[i\](.*?)\[\/i\]/g
      // entry.extra = entry.extra.replace(imageRegex, "<img width=\"100%\" height=\"100%\" class=\"extra-image\" src=\"$1\"/>")
      entry.extra = entry.extra.replace(imageRegex, "")

      var linkRegex = /\[l=\((.*?)\)\](.*?)\[\/l\]/g;
      entry.content = entry.content.replace(linkRegex, "<a class=\"real-link\" href=\"$1\">$2</a>")
    }

    this.entriesFormatted = true
  }

}
