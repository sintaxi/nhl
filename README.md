# NHL API

This application is a demonstration of using NodeJS to
create an API by screen scraping nhl.com. It caches the
json payloads with redis (set to 2 min).

## Install Dependencies

    npm install

You’ll also need to install redis, either from [the website](http://redis.io/) or by using the command line:

    curl -O http://download.redis.io/releases/redis-2.8.19.tar.gz
    tar -xzvf redis-2.8.21.tar.gz
    cd redis-2.8.21.tar.gz
    make
    sudo make install

After it’s installed, start redis using the command:

  redis-server

If you restart your machine, you’ll need to run this command again. Otherwise, redis is now running in the background.

## Run

The following command will start the server:

    node server.js

The server defaults to port `80`, which may require `sudo` or admin privledges. Alternatively, you can specify a different port while you’re developing locally:

    PORT=8001 node server.js
    # Available at http://localhost:8001

## API

In your browser or by using `curl` in the command line, you can now grab the team stats…

    http://localhost:8001/oilers

Or, specify a season…

    http://localhost:8001/oilers/20052006

## License

Copyright 2011–2015 [Brock Whitten](http://twitter.com/sintaxi)
All rights reserved.

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
