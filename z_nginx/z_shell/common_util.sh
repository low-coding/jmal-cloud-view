#!/bin/bash

time_day="`date +%Y%m%d`"
time_hour="`date +%Y%m%d%H`"
time_minute="`date +%Y%m%d%H%M`"
time_second="`date +%Y%m%d%H%M%S`"
USER_HOME=$HOME
email_suffix='technical.help.darcy.zhang@Outlook.com'
pwdd=$PWD

print_error() {
    echo -e "\033[31m[error] ------------------------------------------------------------------------\033[0m"
    echo -e "\033[31m[error] ${1}\033[0m" # 红
    echo -e "\033[31m[error] ------------------------------------------------------------------------\033[0m"
}

error_and_exit() {
    print_error "$1"
    exit 1
}

eexit() {
    print_error "$1"
    exit 1
}

# 检查目录, 没有就直接退出
check_directory() {
    if [ ! -d "${1}" ]; then
        error_and_exit "directory [ ${1} ] not exists, can not continue"
    fi
}

# 检查目录, 没有就递归创建
check_create_directory() {
    if [ ! -d "${1}" ]; then
        mkdir -p "$1"
    fi
}

# 检查文件, 没有就直接退出
check_file() {
    log_with_header "Check file exists , aborted if file not exists, file path [ ${1} ]"
    if [ ! -e "${1}" ]; then
        error_and_exit "File [ ${1} ] not exists, can not continue"
    fi
}

# 检查文件, 有就直接退出
check_file_not_exist() {
    log_with_header "Check file exists , aborted if file is already exist, file path [ ${1} ]"
    if [ -e "${1}" ]; then
        error_and_exit "File [ ${1} ] already exists, can not continue"
    fi
}


log_with_header() {
    echo ""
    echo "[INFO] ------------------------------------------------------------------------"
    echo "[INFO] ${1}"
}

logh() {
    echo ""
    echo "[INFO] ------------------------------------------------------------------------"
    echo "[INFO] ${1}"
}


log() {
    echo "[INFO] ${1}"
}


empty() {
    if [ $# -lt 2 ]; then
        error_and_exit "parameter [ ${1} ] not exists, usage :  $usage_template"
    fi
}


# 检测脚本执行结果

result(){
    if [ $1 != 0 ];then
			print_error "run command with error, info: $2"
			exit $1
    fi
}



trim(){
   echo `echo $1 | sed 's/ //g'`
}

open(){
    cmd="nohup dde-file-manager $pwdd >/dev/null 2>&1 &"
    eval $cmd
}

# 根据命令启动 应用
start_up(){


    nohup $@  > /dev/null 2>&1 &

}
