---
layout: ../../layouts/MarkdownPostLayout.astro
title: "我的第四篇博客文章"
author: "Astro 学习者"
description: "这篇文章会自己出现在列表中！"
image:
  url: "https://docs.astro.build/default-og-image.png"
  alt: "The word “astro” against an illustration of planets and stars."
pubDate: 2022-08-08
tags: ["astro", "successes"]
---

这篇文章应该会与其他的博客文章一起显示，因为 `Astro.glob()` 会返回一个包含所有文章的列表，以创建这个文章列表。

首先，我们知道$ a^2+b^2=25 $,这是一个完全平方公式，可以写成$(a+b)^2-2ab=25$。

然后，我们知道$a+b=7$,这是我们的第一个方程。

我们还知道$a>b$,这是我们的第二个条件。

我们可以通过代入法来解这个问题。首先，我们可以将第一个方程代入第二个方程，得到$7^2-2ab=25$,即$49-2ab=25$,解这个方程我们得到$ab=12$。

然后，我们可以将$ab=12$代入第一个方程$a+b=7$,得到$a(7-a)=12$,解这个方程我们得到$a=4$或$a=3$。

当$a=4$时，$b=7-4=3$。

当$a=3$时，$b=7-3=4$。

在这两个情况下，我们都满足$a>b$的条件。

所以，$a$和$b$的解为$(4,3)$和$(3,4)$。

一元二次方程的求根公式为：

$$
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$

其中，$a$、$b$、$c$是方程的系数，且满足 $a
eq0$。这个公式可以通过将原方程进行变形和分解因式得到。
