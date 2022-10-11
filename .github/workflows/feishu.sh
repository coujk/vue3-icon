curl -X POST \
#!/bin/bash
content=${@:1}
content=${content//\<font color=\'red\'\>/}
content=${content//\<\/font\>\<\/br\>/}
content=${content//\ /}
time3=$(date "+%H:%M:%S")
content="$time3"
echo "warn content is : $content"

api=https://open.feishu.cn/open-apis/bot/v2/hook/02ecd487-071a-4663-963b-5cdd4eb3b5ec #飞书机器人webhook 地址


curl -X POST \
  $api \
  -H 'Content-Type: application/json' \
  -d '{
    "msg_type": "post",
    "content": {
        "post": {
            "zh_cn": {
                "title": "icon updated!yarn upgrade metaMaker-icons --latest.",
                "content": [
                    [
                        {
                            "tag": "text",
                            "un_escape": true,
                            "text": ""
                        }
                    ],
                    [

                    ]
                ]
            }
        }
    }
}'