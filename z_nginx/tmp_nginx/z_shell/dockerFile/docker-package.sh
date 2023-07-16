#!/usr/bin/env bash
source ../common_util.sh

# 静态变量
workDir=./tmp_nginx

docker_image_prefix=harbor.doublespring.top
image_save_path=~/nginx_front

projectName=$1
module=$2
version=$3

# 进入当前工程根目录
logh "Current workspace >> $PWD"
sleep 1s
cd ../../

rm -rf $workDir
mkdir -p $workDir/html

# 复制待打包文件 到 ~/$workDir
cp -r ../dist/* $workDir/html
cp -r z_shell $workDir
cp -r nginx $workDir
cp df-$module $workDir

# 进入 临时 打包操作目录
cd $workDir
logh "Current workspace  >> $PWD，Packaging VUE files"
sleep 1s

# 压缩 html 静态资源文件
tar -zcf html.tgz html

logh "Packaging project 【$version】..."
sleep 1s

# 打包 docker 镜像
docker rmi $docker_image_prefix/$projectName/$module:$version

docker build -t $docker_image_prefix/$projectName/$module:$version -f df-$module .

logh "Project of 【$module】 has been packaged successfully，pushing docker image ."
sleep 3s

docker images | grep $module

# 推送 docker 镜像到 Harbor 仓库
docker push $docker_image_prefix/$projectName/$module:$version

# 删除临时工作目录
cd ../
# rm -rf $workDir

log ""
logh "Project of 【$module】 has been packaged successfully !!!"
log ""


rm -rf $workDir

rm -rf $image_save_path
mkdir -p $image_save_path

cd $image_save_path
full_images=$docker_image_prefix/$projectName/$module:$version

logh "Exporting project of 【 $full_images 】 "
docker save $full_images | gzip > $module.tgz

ls -lh $module.tgz
