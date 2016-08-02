---
layout: page
title: ARTICLES
permalink: /articles/
---

  <div class="post-list">
    {% for post in site.categories.work %}
      <div class="post-work-item">
         <div class="post-work-item_img">
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
          <img src="{{ site.baseurl }}/img/post/{{post.quickId}}/{{ post.shot-img }}">
          </a>
         </div>
        <!--<span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>-->

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </div>
    {% endfor %}
  </div>


