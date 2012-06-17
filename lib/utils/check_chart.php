<?php

function check_chart_writable($id, $callback) {
    $chart = ChartQuery::create()->findPK($id);
    if ($chart) {
        $user = DatawrapperSession::getUser();
        if ($chart->isWritable($user) === true) {
            call_user_func($callback, $user, $chart);
        } else {
            // no such chart
            error_chart_not_writable();
        }
    } else {
        // no such chart
        error_chart_not_found($id);
    }
}

function check_chart_public($id, $callback) {
    $chart = ChartQuery::create()->findPK($id);
    if ($chart) {
        $user = DatawrapperSession::getUser();
        if ($user->isAbleToPublish()) {
            call_user_func($callback, $user, $chart);
        } else {
            // no such chart
            error_not_allowed_to_published();
        }
    } else {
        // no such chart
        error_chart_not_found($id);
    }
}


function check_chart_exists($id, $callback) {
    $chart = ChartQuery::create()->findPK($id);
    if ($chart) {
        call_user_func($callback, $chart);
    } else {
        // no such chart
        error_chart_not_found($id);
    }
}