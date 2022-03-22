FROM    node:16.14-alpine
RUN     npm install -g http-server
WORKDIR /storybook
COPY    . .
RUN     yarn install
RUN     yarn build-storybook
# The default port of the application
EXPOSE  8080

CMD ["http-server", "/storybook-static"]