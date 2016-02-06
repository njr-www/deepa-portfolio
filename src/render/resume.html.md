---
layout: 'default'
title: "Deepa Rodrigues"
resume:
    experience:
        year: 2015
        months: "Nov-Jan"
        details: "Furniture design intern at **Jomso Studio, Mumbai**."
---
 
[deepajrodrigues@gmail.com](mailto:deepajrodrigues@gmail.com)

[+91 97429 30889](tel:+91 9742930889)

## Experience

<li>
<span class='resume-year'>2015

<% for exp in @experience %>
    <li>
        <%= exp.year %>: 
        <%= exp.months %>: 
        <%= exp.details %>: 

    </li>
<% end %>
