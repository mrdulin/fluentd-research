# fluentd-research

## 环境

`mac osx`

## 安装

通过`Ruby gem`安装: https://docs.fluentd.org/v1.0/articles/install-by-gem

查看`gem`环境变量

```bash
☁  fluentd-research [master] ⚡  gem environment
RubyGems Environment:
  - RUBYGEMS VERSION: 2.5.2
  - RUBY VERSION: 2.3.3 (2016-11-21 patchlevel 222) [universal.x86_64-darwin17]
  - INSTALLATION DIRECTORY: /Library/Ruby/Gems/2.3.0
  - USER INSTALLATION DIRECTORY: /Users/ldu020/.gem/ruby/2.3.0
  - RUBY EXECUTABLE: /System/Library/Frameworks/Ruby.framework/Versions/2.3/usr/bin/ruby
  - EXECUTABLE DIRECTORY: /usr/local/bin
  - SPEC CACHE DIRECTORY: /Users/ldu020/.gem/specs
  - SYSTEM CONFIGURATION DIRECTORY: /Library/Ruby/Site
  - RUBYGEMS PLATFORMS:
    - ruby
    - universal-darwin-17
  - GEM PATHS:
     - /Library/Ruby/Gems/2.3.0
     - /Users/ldu020/.gem/ruby/2.3.0
     - /System/Library/Frameworks/Ruby.framework/Versions/2.3/usr/lib/ruby/gems/2.3.0
  - GEM CONFIGURATION:
     - :update_sources => true
     - :verbose => true
     - :backtrace => false
     - :bulk_threshold => 1000
  - REMOTE SOURCES:
     - https://rubygems.org/
  - SHELL PATH:
     - /Users/ldu020/workspace/google-cloud-sdk/bin
     - /usr/local/bin
     - /usr/bin
     - /bin
     - /usr/sbin
     - /sbin
     - /usr/local/sbin
```

`fluentd`的安装目录为`/Library/Ruby/Gems/2.3.0/gems/fluentd-1.2.1/`

包含了一些例子：`/Library/Ruby/Gems/2.3.0/gems/fluentd-1.2.1/example`

`fluentd`的`plugin`目录为`/Library/Ruby/Gems/2.3.0/gems/`

## 本地使用

启动`fluentd`:

```bash
☁  fluentd-research [master] ⚡  fluentd -c ./fluent/fluent.conf -vv
```

停止`fluentd`:

```bash
☁  fluentd-research [master] ⚡  sudo pkill -f fluentd
```

检查配置文件是否正确:

- 配置文件包含错误

```bash
☁  fluentd-research [master] ⚡  fluentd --dry-run -c ./fluent/fluent.conf
2018-06-11 13:59:26 +0800 [info]: parsing config file is succeeded path="./fluent/fluent.conf"
2018-06-11 13:59:26 +0800 [info]: starting fluentd-1.2.1 as dry run mode ruby="2.3.3"
2018-06-11 13:59:26 +0800 [info]: adding forwarding server '192.168.0.12:24224' host="192.168.0.12" port=24224 weight=60 plugin_id="object:3fec6f00607c"
2018-06-11 13:59:26 +0800 [info]: [forward_output] adding forwarding server '192.168.0.11:24224' host="192.168.0.11" port=24224 weight=60 plugin_id="forward_output"
2018-06-11 13:59:26 +0800 [info]: [http_input] Oj is not installed, and failing back to Yajl for json parser
2018-06-11 13:59:26 +0800 [error]: config error file="./fluent/fluent.conf" error_class=Fluent::ConfigError error="Duplicated plugin id `forward_input`. Check whole configuration and fix it."
```

- 配置文件正确

```bash
☁  fluentd-research [master] ⚡  fluentd --dry-run -c ./fluent/fluent.conf
2018-06-11 14:00:05 +0800 [info]: parsing config file is succeeded path="./fluent/fluent.conf"
2018-06-11 14:00:05 +0800 [info]: starting fluentd-1.2.1 as dry run mode ruby="2.3.3"
2018-06-11 14:00:05 +0800 [info]: adding forwarding server '192.168.0.12:24224' host="192.168.0.12" port=24224 weight=60 plugin_id="object:3fd50301adac"
2018-06-11 14:00:05 +0800 [info]: [forward_output] adding forwarding server '192.168.0.11:24224' host="192.168.0.11" port=24224 weight=60 plugin_id="forward_output"
2018-06-11 14:00:05 +0800 [info]: [http_input] Oj is not installed, and failing back to Yajl for json parser
```

## 通过 docker 使用

使用每个例子自己的`fluent.conf`

```bash
docker run -d -p 24224:24224 -p 24224:24224/udp -v /Users/ldu020/workspace/fluentd-research/logs:/fluentd/log -v /Users/ldu020/workspace/fluentd-research/src/send-an-event-record-to-fluentd:/fluentd/etc fluent/fluentd
```

## 参考链接

https://docs.fluentd.org/v1.0/articles/quickstart

https://hub.docker.com/r/fluent/fluentd/
