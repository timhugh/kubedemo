FROM ruby:2.7.1

ENV HTTP_PORT 3000
EXPOSE 3000

WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . ./
CMD [ "bin/server" ]
