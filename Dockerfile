FROM ruby:2.4-alpine

RUN apk add --no-cache build-base gcc bash cmake

RUN gem install jekyll

EXPOSE 4000

WORKDIR /site

# create new site by setting -e JEKYLL_NEW=true
ENV JEKYLL_NEW false

COPY docker-entrypoint.sh /usr/local/bin/

# on every container start we'l'
ENTRYPOINT [ "docker-entrypoint.sh" ]

CMD [ "bundle", "exec", "jekyll", "serve", "--force_polling", "-H", "0.0.0.0", "-P", "4000" ]


# Q. What if I need to create a site first?

# just add a environment variable to the run command to tell the container to make one:

# docker run -p 80:4000 -v $(pwd):/site -e JEKYLL_NEW=true bretfisher/jekyll-serve

# Q. What if I want to run other jekyll commands?

# just add the command to the end (with your -v included) to override the jekyll serve:

# docker run -v $(pwd):/site bretfisher/jekyll-serve jekyll doctor