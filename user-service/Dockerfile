FROM ruby:2.7.1

ENV HTTP_PORT 80
EXPOSE 80

WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . ./
CMD [ "script/start.sh" ]
