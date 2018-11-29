# CDC Vaccinations - React Viz

## Overview and Motivation

This repo visually examines vaccination coverage among children aged 19–35 months. The source data is from the yearly CDC report on the same topic here: https://www.cdc.gov/mmwr/volumes/67/wr/mm6740a4.htm.

Over the last 5 years the percentage of children receiving no vaccines by age 2 is rising. This is both alarming and surprising, and the goal of this project is to dig deeper into CDC data and determine why. 

## Code Notes

This repo builds all 3 visualizations using React, and the bottom-most chart is interactive by vaccine type. I've created the JSON files manually from the CDC survey data. 

## Chart Notes

I've arranged the charts in my viz vertically to show the story of my takeaways from the study. An intro paragraph quote at the top my viz underscores what I want the viewer to think about when scrolling down through the viz. I've tried to highlight the relevant proportions between the items on each chart, so the viewer gets a good visual indicator of the differerence for the groups on each separate graph. The first chart sets the stage with a 2013-2017 trend, and the latter two charts dive into 2017 specific survey data.

## Data Notes

This data is based on CDC survey data. Hence, there's naturally statistical error that will arise. The CDC report contains the relevant confidence intervals for the data I've extracted into the viz. Specifically, they use 95% confidence intervals with their estimates, which means that 95% of the time upon repeated sampling the true pop. parameter would be bracketed in their reported interval. I didn't include these in my viz, but after examining the intervals I don't feel that their exclusion changes the story or insights. That being said I am thinking of ways to integrate them moving forward into the viz.
